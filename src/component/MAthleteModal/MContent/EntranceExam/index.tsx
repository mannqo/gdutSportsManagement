import { Form, Row, Col, Input, Upload, Button, Select, Modal } from 'antd'
import React, { memo } from 'react'
import { athleteEntranceExam } from '../../../../constant/athlete';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import { postEntranceExam } from '../../../../services/athlete';

const { Option } = Select;
const EntranceExam = memo((props: any) => {
    const [form] = Form.useForm();
    const { number } = props;

    const onFinish = (values: any) => {
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
    };

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