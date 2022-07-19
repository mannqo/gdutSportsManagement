import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom';
import { athleteInfo, coachInfoType, eventInfo, InfoType } from '../../../type/infoNum';

const MUploadBtn = memo((props: { type: InfoType | undefined }) => {
    const { type } = props;
    const url = type && getUrl(type);
    function getUrl(type: InfoType) {
        let url = '';
        switch (type) {
            case athleteInfo: url = '/athleteManage'; break;
            case eventInfo: url = '/eventManage'; break;
            case coachInfoType: url = '/coachInfo'; break;
            default: url = ''
        }
        return url;
    }
    const display = type ? 'block' : 'none';
    const history = useHistory();
    const transferToUpload = () => {
        console.log(url);
        history.push(`${url}/info/uploadExcel`);
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