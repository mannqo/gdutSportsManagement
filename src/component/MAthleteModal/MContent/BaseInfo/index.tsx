import { Form, Row, Col, Input, Select, Button, DatePicker } from 'antd'
import React, { memo, useState } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import styled from 'styled-components';
import MUploadImg from '../../../MSelector/MUploadImg';
import moment from 'moment';

const { Option } = Select;

const BaseInfo = memo(() => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };
    const dateFormat = 'YYYY-MM-DD';

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
                            hasFeedback
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    required: item.require ? true : false,
                                    message: `请填写${item.label}`,
                                },
                            ]}
                        >
                            {
                                item.component === 'MPicker' ?
                                    <Select placeholder={`请填写${item.label}`}>
                                        {
                                            item.optionList && item.optionList.map((item: any) => (
                                                <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                            ))
                                        }
                                    </Select>
                                    : item.component === 'MDatePicker' ?
                                        <DatePicker format={dateFormat} /> : <Input />
                            }
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

                <Button type="primary" htmlType="submit" >
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