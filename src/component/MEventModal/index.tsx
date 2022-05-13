import { Form, Row, Col, Input, Button } from 'antd'
import React, { memo } from 'react'
import { eventInfo } from '../../constant/event';
import { useEventModal } from './useEventModal';

const MEventModal = memo((props: { id?: number, type?: string }) => {
    const { id, type } = props;  // type: approve审核 eventInfo比赛信息
    const {
        form,
        value,
        onFinish,
        getFormData,
        approveApply,
        refuseApply
    } = useEventModal(id);

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>比赛信息表</h2>
            <Form
                form={form}
                preserve={false}
                initialValues={value}
                name="eventInfo"
                onFinish={onFinish}
            >
                <Row gutter={10}>
                    {eventInfo.map((item) => (
                        <Col span={8} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                                rules={[
                                    {
                                        required: item.require ? true : false,
                                        message: `请填写${item.label}`,
                                    },
                                ]}
                            >
                                {item.component ?
                                    <item.component
                                        initfileList={
                                            value[item.name]
                                        }
                                        name={item.name}
                                        id={id}
                                        getFormData={getFormData} />
                                    : <Input />
                                }
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button style={{ 'display': type === 'eventInfo' ? 'block' : 'none' }} type="primary" htmlType="submit">
                        提交比赛信息
                    </Button>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center', display: type === 'approve' ? 'block' : 'none' }} >
                <Button onClick={approveApply} type='primary' style={{ 'marginRight': '20px' }}>通过申请</Button>
                <Button onClick={refuseApply}>拒绝该申请</Button>
            </div>
        </>

    )
})

export default MEventModal