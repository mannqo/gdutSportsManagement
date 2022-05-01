import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal } from 'antd'
import React, { memo, useEffect } from 'react'
import { noticeContent } from '../../../../constant/notice'
import { postNoticeMsg } from '../../../../services/notice'


const NoticeForm = memo((props: { type: string }) => {
    const { type } = props;
    const onFinish = async (values: any) => {
        values.type = type;
        values.fromPerson = 'aaa';
        Modal.confirm({
            title: '确定发布该消息吗？',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postNoticeMsg(values)
                Modal.info({
                    title: res.message,
                })
            }
        });
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>发布通知</h2>
            <Form
                // form={form}
                preserve={false}
                // initialValues={value} 
                name="noticeForm"
                onFinish={onFinish}
            >
                {
                    noticeContent.map((item: any) => (
                        <Form.Item
                            key={item.name}
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    required: item.require ? true : false,
                                    message: '请填写必填信息',
                                },
                            ]}
                        >
                            <Input placeholder={`填写${item.label}`} />
                        </Form.Item>
                    ))
                }
                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        发布消息
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
})

export default NoticeForm