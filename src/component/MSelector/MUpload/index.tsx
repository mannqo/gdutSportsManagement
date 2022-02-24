import React, { memo } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const MUpload = memo((props: any) => {

    const { name, getFormData } = props;
    const getBase64 = (img: any, callback: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const beforeUpload = (file: File) => {
        try {
            getFormData(name, file);
            getBase64(file, (imageUrl: any) => {
                // console.log(imageUrl);
            })
            return false;
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Upload
            name='name'
            beforeUpload={beforeUpload}
        >
            <Button icon={<UploadOutlined />}>上传附件</Button>
        </Upload>
    )
})

export default MUpload