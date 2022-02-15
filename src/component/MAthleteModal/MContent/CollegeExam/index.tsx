import { Form, Row, Col, Input, Upload, Button, Select } from 'antd'
import React, { memo } from 'react'
import { athleteCollegeExam } from '../../../../constant/athlete';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons'; 

const { Option } = Select;

const CollegeExam = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name="entrance"
            onFinish={onFinish}
            style={{ width: 800 }}
        >
            <Row gutter={10}>
                {athleteCollegeExam.map((item) => (
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
                                    </Select> : <Input />
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


export default CollegeExam