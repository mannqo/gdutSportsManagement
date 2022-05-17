import { Button, Col, Form, Input, Row } from 'antd';
import React, { memo } from 'react'
import { ImageWrapper } from '../../../../../../config/style';
import { stairInfo } from '../../../../../../constant/system';
import { useModal } from './useModal';

const Modal = memo((props: { id?: number }) => {
    const { id } = props;
    const {
        onFinish,
        form
    } = useModal(id);
    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>一级组织</h2>
            <ImageWrapper>
                <Form
                    form={form}
                    name="firstOrganization"
                    onFinish={onFinish}
                >
                    <Row gutter={10}>
                        {stairInfo.map((item) => (
                            <Col span={10} key={item.name}>
                                <Form.Item
                                    name={item.name}
                                    label={item.label}
                                    required={item.require}
                                >
                                    {
                                        <Input placeholder={`填写${item.label}`} />
                                    }
                                </Form.Item>
                            </Col>
                        )
                        )}
                    </Row>
                    <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                        <Button type="primary" htmlType="submit" >
                            提交一级组织信息
                        </Button>
                    </Form.Item>
                </Form>
            </ImageWrapper>
        </>
    )
})

export default Modal