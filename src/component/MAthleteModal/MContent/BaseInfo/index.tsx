import { Form, Row, Col, Input, Select, Button, DatePicker, Modal } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import MUploadImg from '../../../MSelector/MUploadImg';
import MDatePicker from '../../../MSelector/MDatePicker';
import { getAthleteMsg, postAthleteMsg, putAthleteMsg } from '../../../../services/athlete';
import moment from 'moment';
import { ImageWrapper } from '../../../../config/style';

const { Option } = Select;

const BaseInfo = memo((props: any) => {
    const [number, setNumber] = useState('');
    const [value, setValue] = useState();
    const [imageUrl, setImageUrl] = useState('');

    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';
    const { getNumber, id } = props;

    const postInfo = async (values: any) => {
        Modal.confirm({
            title: '确定提交该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                getNumber(values.number);
                const res = await postAthleteMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putAthleteMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const onFinish = async (values: any) => {
        id && putInfo(values);
        !id && postInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getAthleteMsg({ id });
            const msg = res.data.records[0];
            msg.birth = moment(msg.birth, dateFormat);
            setImageUrl(msg.picture);
            setNumber(msg.number);
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.resetFields();
        number && getNumber(number);
    }, [value, number, getNumber, form])

    return (
        <>
            <ImageWrapper>
                <Form
                    form={form}
                    preserve={false}
                    initialValues={value}
                    name="baseInfo"
                    onFinish={onFinish}
                >
                    <Row gutter={10}>
                        {athleteBaseInfo.map((item) => (
                            <Col span={10} key={item.name}>
                                <Form.Item
                                    name={item.name}
                                    label={item.label}
                                    rules={[
                                        {
                                            required: item.require ? true : false,
                                            message: `请填写${item.label}`,
                                        },
                                    ]}
                                >
                                    {
                                        item.component === 'MPicker' ?
                                            <Select placeholder={`选择${item.label}`}>
                                                {
                                                    item.optionList && item.optionList.map((item: any) => (
                                                        <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                                    ))
                                                }
                                            </Select>
                                            :
                                            item.component === 'MDatePicker' ?
                                                <MDatePicker /> :
                                                <Input placeholder={`填写${item.label}`} />
                                    }
                                </Form.Item>
                            </Col>
                        )
                        )}
                        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                            <Button type="primary" htmlType="submit" >
                                提交基本信息
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
                <div className="image">
                    <p>证件照:</p>
                    <MUploadImg initialImageUrl={imageUrl} id={id} type={10} />
                </div>
            </ImageWrapper>

        </>

    )
})

export default BaseInfo