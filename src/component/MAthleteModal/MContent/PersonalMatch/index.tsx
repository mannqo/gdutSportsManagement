import { Form, Row, Col, Input, Button, Modal } from 'antd'
import React, { memo } from 'react'
import { athletePersonalMatch } from '../../../../constant/athlete';
import { postSportCompetition } from '../../../../services/athlete';

const PersonalMatch = memo((props: any) => {
    const [form] = Form.useForm();
    const { number } = props;

    const onFinish = (values: any) => {
        values.number = number;;
        Modal.confirm({
            title: '确定提交该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postSportCompetition(values)
                Modal.info({
                    title: res.message,
                })
            }
        });
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
                            <Input placeholder={`填写${item.label}`} />
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