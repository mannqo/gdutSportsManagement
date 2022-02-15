import { Form, Row, Col, Input, Upload, message, Button } from 'antd'
import React, { memo, useState } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import styled from 'styled-components';
import MUploadImg from '../../../MSelector/MUploadImg';

const BaseInfo = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            form={form}
            name="baseInfo"
            onFinish={onFinish}
            style={{ width: 700 }}
        >
            <Row gutter={10}>
                {athleteBaseInfo.map((item) => (
                    <Col span={10} key={item.name}>
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
                            {item.component ? <item.component optionList={item.optionList} /> : <Input />}
                        </Form.Item>
                    </Col>
                )
                )}
            </Row>

            <ImageWrapper>
                <p>相片:</p>

                <MUploadImg />
            </ImageWrapper>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交基本信息
                </Button>
            </Form.Item>
        </Form>
    )
})
const ImageWrapper = styled.div` 
    position: absolute;
    right: 40px;
    top: 120px; 
    .ant-upload.ant-upload-select-picture-card {
        width: 160px;
        height: 250px;
    }
`

export default BaseInfo