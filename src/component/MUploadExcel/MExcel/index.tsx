import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import React from 'react';
import styled from 'styled-components';
import { uploadExcel } from '../../../services/excel';
import { InfoType } from '../../../type/infoNum';

const { Dragger } = Upload;

const MExcel = (props: { type: InfoType }) => {
    const { type } = props;

    function beforeUpload(file: RcFile) {
        const isExcel = file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        if (!isExcel) {
            message.error('你只能上传execl文件');
        }
        return isExcel;
    }
    function onChange(info: any) {
        console.log(info);

        const { status, response } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${response.message} `);
        } else if (status === 'error') {
            message.error(`${info.file.name} 文件上传失败`);
        }
    }
    function onDrop(e: any) {
        console.log('Dropped files', e.dataTransfer.files);
    }

    return (
        <MExcelContainer>
            <h2>批量导入用户信息</h2>
            <Dragger
                name={uploadExcel.name}
                action={uploadExcel.url}
                headers={{
                    token: uploadExcel.token
                }}
                data={{ type }}
                beforeUpload={beforeUpload}
                onChange={onChange}
                onDrop={onDrop}
                maxCount={1}
            >
                <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
                <p className="ant-upload-hint">
                    只能上传excel文件
                </p>
            </Dragger>
        </MExcelContainer >

    )
};

const MExcelContainer = styled.div`
    height: 60vh;
    padding: 50px 20px;
    h2 {
        text-align: center;
    }
`

export default MExcel;