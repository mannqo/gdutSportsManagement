import React, { memo } from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const MUpload = memo((initialProps: any) => {

    const props = {
        name: initialProps.name,
        action: '',
        beforeUpload(file: File) {
            console.log(file);
            const reader = new FileReader();
            // reader.addEventListener('load', () => {
            //     console.log(reader.result); 
            //     return false;
            // });
            reader.onload = () => {
                console.log(reader.result); 
                return false;
            }
            reader.readAsDataURL(file);
        }
    };



    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>上传附件</Button>
        </Upload>
    )
})

export default MUpload