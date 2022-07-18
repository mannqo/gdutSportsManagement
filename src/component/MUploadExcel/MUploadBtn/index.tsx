import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd'
import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const MUploadBtn = memo((props: { type: string | undefined }) => {
    const { type } = props;
    const display = type ? 'block' : 'none';
    const history = useHistory();
    const transferToUpload = () => {
        history.push('/athleteManage/info/uploadExcel');
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

export default MUploadBtn