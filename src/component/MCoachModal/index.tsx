import { Form, Row, Col, Input, Button } from 'antd'
import React, { memo, useState } from 'react'
import { coachInfo } from '../../constant/coach';

const MCoachModal = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>教练信息表</h2>
            <Form
                form={form}
                name="baseInfo"
                onFinish={onFinish}
                style={{ width: 900 }}
            >
                <Row gutter={10}>
                    {coachInfo.map((item) => (
                        <Col span={10} key={item.name}>
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
                        提交教练信息
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
})

export default MCoachModal