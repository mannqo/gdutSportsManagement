import React, { memo, useEffect, useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { host } from '../../../config';

const MUpload = memo((props: { name: string, getFormData: Function, initfileList: any }) => {
    const { name, getFormData, initfileList } = props;
    let defaultFileList: Array<any> = [];
    if (initfileList) {
        defaultFileList = [];
        initfileList.forEach((item: any) => {
            const imgArr = item.split('/');
            const name = imgArr[imgArr.length - 1];
            const thumbUrl = host + item;
            defaultFileList.push({ name, thumbUrl, url: thumbUrl, status: 'done', uid: name });
        });
    }
    const [fileList, setFileList] = useState([...defaultFileList]);

    const getBase64 = (img: any, callback: any) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const beforeUpload = (file: File) => {
        try {
            getFormData(name, file);
            getBase64(file, (imageUrl: any) => {
                const newFileList = JSON.parse(JSON.stringify(fileList));
                newFileList.push({ name: file.name, thumbUrl: imageUrl, url: imageUrl, status: 'done', uid: file.name })
                setFileList(newFileList)
            })
            return false;
        } catch (err) {
            console.log(err);
        }
    }
    const onFileChange = (e: any) => {
        console.log('filechange ', e);
    } 

    return (
        <Upload
            name={name}
            beforeUpload={beforeUpload}
            defaultFileList={defaultFileList}
            fileList={fileList}
            onChange={onFileChange}
        >
            <Button icon={<UploadOutlined />}>上传附件</Button>
        </Upload>
    )
})

export default MUpload