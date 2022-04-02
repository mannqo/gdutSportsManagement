import React, { memo, useEffect, useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { baseURL } from '../../../config';
import { UploadFile } from 'antd/lib/upload/interface';


const MUpload = memo((props: any) => {
    const arr: Array<any> = [];
    const { name, getFormData, initfileList } = props;
    const [fileList, setFileList] = useState(arr);

    useEffect(() => { 

        if (initfileList) {
            setFileList(arr);
            initfileList.forEach((item: any) => {
                const imgArr = item.split('/');
                const name = imgArr[imgArr.length - 1];
                const thumbUrl = baseURL + item;
                fileList.push({ name, thumbUrl });
            });
            setFileList(fileList);
        }
    }, [])

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
            name={name}
            beforeUpload={beforeUpload}
            fileList={fileList}
        >
            <Button icon={<UploadOutlined />}>上传附件</Button>
        </Upload>
    )
})

export default MUpload