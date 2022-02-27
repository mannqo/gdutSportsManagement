import { Form, Row, Col, Input, Upload, Button, Select, Modal } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { athleteEntranceExam } from '../../../../constant/athlete';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import { getEntranceExam, postEntranceExam, putEntranceExam } from '../../../../services/athlete';
import moment from 'moment';

const { Option } = Select;
const EntranceExam = memo((props: any) => {
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();
    const { number, id } = props;
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
            }
        });
    }
    const putInfo = (values: any) => {
        console.log(id);
        
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
                setValue(res.data.records[0]);
            }

        }
        id && getInitialValues();
    }, [number])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value, id])

    return (
        <Form
            form={form}
            name="entrance"
            onFinish={onFinish}
            style={{ width: 800 }}
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

            <ImageWrapper>
                <p>身份证件:</p>
                <Upload>
                    <Button icon={<UploadOutlined />}>上传附件</Button>
                </Upload>,
            </ImageWrapper>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交高考情况信息
                </Button>
            </Form.Item>
        </Form>
    )
})
const ImageWrapper = styled.div` 
    position: absolute;
    right: 60px;
    top: 80px;
`


export default EntranceExam