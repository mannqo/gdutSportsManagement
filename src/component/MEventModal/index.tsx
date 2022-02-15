import { Form, Row, Col, Input, Button } from 'antd'
import React, { memo, useState } from 'react'
import { eventInfo } from '../../constant/event';

const MEventModal = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>比赛信息表</h2>
            <Form
                form={form}
                name="baseInfo"
                onFinish={onFinish}
                style={{ width: 900 }}
            >
                <Row gutter={10}>
                    {eventInfo.map((item) => (
                        <Col span={8} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                            >
                                {item.component ? <item.component /> : <Input />}
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        提交比赛信息
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
})

export default MEventModal