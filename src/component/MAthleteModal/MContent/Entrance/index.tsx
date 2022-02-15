import { Form, Row, Col, Input, Upload, message, Button, Select, DatePicker } from 'antd'
import React, { memo, useState } from 'react'
import { athleteEntrance } from '../../../../constant/athlete';
import styled from 'styled-components';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Option } = Select;

const Entrance = memo(() => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    const beforeUpload = (file: File) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const getBase64 = (img: any, callback: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                setImageUrl(imageUrl);
                setLoading(false);
            })
        }
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <Form
            form={form}
            name="entrance"
            onFinish={onFinish}
            style={{ width: 700 }}
        >
            <Row gutter={10}>
                {athleteEntrance.map((item) => (
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
                                        <DatePicker
                                            defaultValue={moment('2020-01-01', dateFormat)}
                                            format={dateFormat} /> :
                                        <Input />
                            }
                        </Form.Item>
                    </Col>
                ))}

            </Row>

            <ImageWrapper>
                <p>学生证:</p>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </ImageWrapper>

            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交入学情况信息
                </Button>
            </Form.Item>
        </Form>
    )
})
const ImageWrapper = styled.div` 
    position: absolute;
    right: 100px;
    top: 120px;
`

export default Entrance