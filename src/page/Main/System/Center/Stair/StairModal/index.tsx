import { Col, Form, Input, Row } from 'antd';
import React, { memo } from 'react'
import { ImageWrapper } from '../../../../../../config/style';
import { firstOrganization } from '../../../../../../constant/system';
import { useModal } from './useModal';

const Modal = memo((props: { id?: number }) => {
    const { id } = props;
    const {
        onFinish,
        form
    } = useModal(id);
    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>教练信息表</h2>
            <ImageWrapper>
                <Form
                    form={form}
                    name="firstOrganization"
                    onFinish={onFinish}
                >
                    <Row gutter={10}>
                        {firstOrganization.map((item) => (
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
                </Form>
            </ImageWrapper>
        </>
    )
})

export default Modal