import { Form, Row, Col, Input, Button } from 'antd'
import React, { memo } from 'react'
import { athletePersonalMatch } from '../../../../constant/athlete';
import { usePersonalMatch } from './usePersonalMatch';

const PersonalMatch = memo((props: { number: string, id: number }) => {
    const { number, id } = props;
    const { form, onFinish } = usePersonalMatch(number, id);
    return (
        <Form
            form={form}
            name="personalMatch"
            layout={'vertical'}
            onFinish={onFinish}
        >
            <Row gutter={[32, 16]}>
                {athletePersonalMatch.map((item) => (
                    <Col span={8} key={item.name}>
                        <Form.Item
                            name={item.name}
                            label={item.label}
                            rules={[
                                { message: '', },
                            ]}
                        >
                            {
                                item.component ? <item.component /> : <Input placeholder={`填写${item.label}`} />
                            }
                        </Form.Item>
                    </Col>
                ))}

            </Row>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交个人比赛信息
                </Button>
            </Form.Item>
        </Form>
    )
})

export default PersonalMatch