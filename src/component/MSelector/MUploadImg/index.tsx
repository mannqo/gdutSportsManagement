import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadProps } from 'antd/es/upload/interface';
import { host } from '../../../config';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    // return isJpgOrPng && isLt2M; 
    return false;
};

const MUploadImg = (props: { initialImageUrl: string | undefined, name: string, getFormData: (name: string, file: File) => void }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const { initialImageUrl, name, getFormData } = props;

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<File>) => {
        const { file } = info;
        getBase64(file as RcFile, url => {
            setLoading(false);
            setImageUrl(url);
        });
        getFormData(name, file);
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {
                imageUrl ?
                    <img src={imageUrl} alt={name} style={{ width: '100%' }} />
                    : initialImageUrl ?
                        <img src={host + initialImageUrl} alt={name} style={{ width: '100%' }} />
                        : uploadButton
            }
        </Upload>
    );
};
export default MUploadImg;