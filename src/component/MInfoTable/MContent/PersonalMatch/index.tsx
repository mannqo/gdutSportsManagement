import { Form, Row, Col, Input, Upload, message } from 'antd'
import React, { memo, useState } from 'react'
import { athletePersonalMatch } from '../../../../constant/athlete';

const PersonalMatch = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name="baseInfo"
            onFinish={onFinish}
            style={{ width: 1000 }}
        >
            <Row gutter={10}>
                {athletePersonalMatch.map((item) => (
                    <Col span={10} key={item.name}>
                        <Form.Item
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    message: '',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                ))}

            </Row>

        </Form>
    )
})

export default PersonalMatch