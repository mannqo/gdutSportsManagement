import { Form, Row, Col, Input, Upload, message, Button } from 'antd'
import React, { memo, useState } from 'react'
import { athleteCollegeExam } from '../../../../constant/athlete';
import styled from 'styled-components';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

const CollegeExam = memo(() => {
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
            style={{ width: 800 }}
        >
            <Row gutter={10}>
                {athleteCollegeExam.map((item) => (
                    <Col span={20} key={item.name}>
                        <Form.Item
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    message: '',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>
                ))}

            </Row>

            <ImageWrapper>
                <p>身份证件:</p>
                <Upload>
                    <Button icon={<UploadOutlined />}>上传附件</Button>
                </Upload>,
            </ImageWrapper>

        </Form>
    )
})
const ImageWrapper = styled.div` 
    position: absolute;
    right: 60px;
    top: 80px;
`


export default CollegeExam