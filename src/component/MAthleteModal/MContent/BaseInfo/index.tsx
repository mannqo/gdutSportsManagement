import { Form, Row, Col, Input, Select, Button, DatePicker, Modal } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import styled from 'styled-components';
import MUploadImg from '../../../MSelector/MUploadImg';
import { getAthleteMsg, postAthleteMsg, putAthleteMsg } from '../../../../services/athlete';
import moment from 'moment';

const { Option } = Select;
const BaseInfo = memo((props: any) => {
    const [number, setNumber] = useState('');
    const [value, setValue] = useState();
    const [imageUrl, setImageUrl] = useState('');

    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';
    const { getNumber, id } = props;

    const postInfo = async (values: any) => {
        getNumber(values.number);
        Modal.confirm({
            title: '确定提交该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
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
        form.setFieldsValue(value);
        number && getNumber(number);
    }, [value, number, getNumber, form])

    return (
        <>
            <Form
                defaultValue={value}
                form={form}
                name="baseInfo"
                onFinish={onFinish}
                style={{ width: 700 }}
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
                                            <DatePicker placeholder='选择日期' format={dateFormat} /> :
                                            <Input placeholder={`填写${item.label}`} />
                                }
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>


                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit" >
                        提交基本信息
                    </Button>
                </Form.Item>
            </Form>
            <ImageWrapper>
                <p>相片:</p>
                <MUploadImg initialImageUrl={imageUrl} id={id} />
            </ImageWrapper>

        </>

    )
})

const ImageWrapper = styled.div` 
    position: absolute;
    right: 40px;
    top: 120px; 
    .ant-upload.ant-upload-select-picture-card {
        width: 160px;
        height: 250px;
    }
`

export default BaseInfo