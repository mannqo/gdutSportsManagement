import React, { memo, useState } from 'react';
import { Upload, Button, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { host } from '../../../config';
import { deleteFile } from '../../../services/event';

const MUpload = memo((props: { id: number, name: string, getFormData: Function, initfileList: any }) => {
    const { id, name, getFormData, initfileList } = props; 
    let defaultFileList: Array<any> = [];
    if (initfileList) {
        defaultFileList = [];
        initfileList.forEach((item: any) => {
            const imgArr = item.split('/');
            const fileName = imgArr[imgArr.length - 1];
            const thumbUrl = host + item;
            defaultFileList.push({ name: fileName, departName: name, thumbUrl: item, url: thumbUrl, status: 'done', uid: fileName });
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
                newFileList.push({ name: file.name, thumbUrl: imageUrl, url: imageUrl, status: 'done', uid: file })
                setFileList(newFileList)
            })
            return false;
        } catch (err) {
            console.log(err);
        }
    }
    const onFileChange = (e: any) => { 
        setFileList(e.fileList);
    }

    // 如果删除的是还没提交的，那就要先提交
    const onRemove = async (file: any) => {
        const type = file.url.split(':')[0];
        if (type === 'data') {
            Modal.info({
                title: '请先提交信息后再进行删除'
            })
            return false;
        } else {
            // 调用删除文件的接口  
            const res = await deleteFile({ id, type: 4, resource: JSON.stringify(initfileList), path: file.thumbUrl, name: file.departName })
            console.log(res); 
            return true;
        }
    } 

    return (
        <Upload
            name={name}
            beforeUpload={beforeUpload}
            defaultFileList={defaultFileList}
            fileList={fileList}
            onChange={onFileChange}
            onRemove={onRemove}
        >
            <Button icon={<UploadOutlined />}>上传附件</Button>
        </Upload>
    )
})

export default MUpload