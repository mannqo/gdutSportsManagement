import { Form, Row, Col, Input, Upload, Button, Select, Modal } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { athleteEntranceExam } from '../../../../constant/athlete'; 
import { getEntranceExam, postEntranceExam, putEntranceExam } from '../../../../services/athlete';
import moment from 'moment';
import MUploadImg from '../../../MSelector/MUploadImg';
import { ImageWrapper } from '../../../../config/style';

const { Option } = Select;
const EntranceExam = memo((props: any) => {
    const [value, setValue] = useState();
    const [id, setId] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const [form] = Form.useForm();
    const { number } = props;
    const dateFormat = 'YYYY-MM-DD';

    const postInfo = (values: any) => {
        values.number = number;;
        Modal.confirm({
            title: '确定提交该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEntranceExam(values)
                Modal.info({
                    title: res.message,
                })
                if (res.data) {
                    setId(res.data.id);
                }
            }
        });
    }
    const putInfo = (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putEntranceExam(values)
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const onFinish = (values: any) => {
        (!value || !id) && postInfo(values);
        (value && id) && putInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getEntranceExam({ number });
            if (res.data) {
                const msg = res.data.records[0];
                msg.entranceTime = moment(msg.entranceTime, dateFormat); 
                setImageUrl(msg.idCard);
                setValue(msg);
                setId(msg.id);
            } else {
                setValue(undefined);
            }
        }
        number && getInitialValues();
    }, [number, id])

    useEffect(() => {
        form.resetFields();
    }, [value])

    return (
        <ImageWrapper>
            <Form
                form={form}
                preserve={false}
                initialValues={value}
                name="entranceExam"
                onFinish={onFinish}
            >
                <Row gutter={10}>
                    {athleteEntranceExam.map((item) => (
                        <Col span={20} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                                rules={[
                                    {
                                        required: item.require ? true : false,
                                        message: '请填写必填信息',
                                    },
                                ]}
                            >
                                {
                                    item.component === 'MPicker' ?
                                        <Select placeholder={`请填写${item.label}`}>
                                            {
                                                item.optionList && item.optionList.map((item: any) => (
                                                    <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                                ))
                                            }
                                        </Select> : <Input placeholder={`填写${item.label}`} />
                                }
                            </Form.Item>
                        </Col>
                    ))}

                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        提交高考情况信息
                    </Button>
                </Form.Item>
            </Form>
            <div className='image'>
                <p>身份证件:</p>
                <MUploadImg initialImageUrl={imageUrl} id={id} type={14}></MUploadImg>
            </div>
        </ImageWrapper >
    )
})

export default EntranceExam