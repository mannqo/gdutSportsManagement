import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd'
import React, { memo, useEffect } from 'react'
import { importTemplate, uploadExcel } from '../../services/excel';

const MUploadExcel = memo((props: { type: string | undefined }) => {
    const { type } = props;
    const display = type ? 'block' : 'none';

    const uploadExcelRes = async (option: any) => {
        try {
            const { file } = option;
            console.log(file);
            const res = await uploadExcel({ excelFile: file, type });
            console.log(res);

        } catch (err) {
            console.log(err);
        }
    }
    const transferToUpload = () => {

    }
    return (
        <Button
            type='primary'
            icon={<UploadOutlined />}
            onClick={transferToUpload}
            style={{
                display,
                float: 'right',
                margin: 16
            }}>
            导入excel
        </Button >


    )
})

export default MUploadExcel