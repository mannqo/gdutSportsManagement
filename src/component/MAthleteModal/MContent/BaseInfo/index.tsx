import { Form, Row, Col, Input, Upload, message, Button } from 'antd'
import React, { memo, useState } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import styled from 'styled-components';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { baseURL } from '../../../../config';

const BaseInfo = memo(() => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [form] = Form.useForm();

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
        <>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </>
    );
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
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={baseURL}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
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