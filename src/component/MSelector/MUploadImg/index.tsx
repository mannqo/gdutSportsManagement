import { Upload, message, Modal } from 'antd';
import React, { memo, useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { host, uploadImgUrl } from '../../../config';

const MUploadImg = memo((props: any) => {
    const [loading, setLoading] = useState(false);
    const { id, initialImageUrl, type } = props;
    const [imageUrl, setImageUrl] = useState('');

    const beforeUpload = (file: File) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('你只能上传 JPG/PNG 格式的文件');
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
    const handleChange = async (info: any) => {
        const { status, response } = info.file;

        if (status === 'uploading') {
            setLoading(true);
            return;
        }
        if (status === 'done') {
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                const url = response.data;
                setImageUrl(url);
                setLoading(false);
            })
        }
        Modal.info({
            title: status
        })
    }
    const uploadButton = (
        <>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </>
    );

    return (
        <Upload
            name="img"
            listType="picture-card"
            className="avatar-uploader"
            action={uploadImgUrl}
            method='PUT'
            data={{ id, type }}
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            maxCount={1}
        >
            {imageUrl ?
                <img
                    src={host + imageUrl}
                    alt="image"
                    style={{ width: '100%' }} /> :
                initialImageUrl ?
                    <img
                        src={host + initialImageUrl}
                        alt="image"
                        style={{ width: '100%' }} /> :
                    uploadButton}
        </Upload>
    )
})

export default MUploadImg