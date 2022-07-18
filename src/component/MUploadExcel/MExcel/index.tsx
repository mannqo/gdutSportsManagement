import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange(info: any) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e: any) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const MExcel = () => (
    <MExcelContainer>
        <h2>批量导入用户信息</h2>
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
            </p>
            <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
            <p className="ant-upload-hint">
                只能上传excel文件
            </p>
        </Dragger>
    </MExcelContainer>

);

const MExcelContainer = styled.div`
    height: 60vh;
    padding: 50px 20px;
    h2 {
        text-align: center;
    }
`

export default MExcel;