import { Upload, message, Modal } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { baseURL } from '../../../config';

const MUploadImg = memo((props: any) => {
    const [loading, setLoading] = useState(false);
    const { id } = props;
    const [imageUrl, setImageUrl] = useState();

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
        const { status } = info.file;
        if (status === 'uploading') {
            setLoading(true);
            return;
        }
        console.log(info.file.status);

        if (status === 'done') {
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                setImageUrl(imageUrl);
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

    useEffect(() => {

    }, [])

    return (
        <Upload
            name="img"
            listType="picture-card"
            className="avatar-uploader"
            action={baseURL + '/sports/api/img'}
            method='PUT'
            data={{ id, type: 10 }}
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            maxCount={1}
        >
            {imageUrl ? <img src={imageUrl} alt="image" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
    )
})

export default MUploadImg