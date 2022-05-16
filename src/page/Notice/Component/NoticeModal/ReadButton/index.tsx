import { Button, message } from 'antd'
import React, { memo, useState } from 'react'
import { putNoticeMsg } from '../../../../../services/notice';
import { InfoType } from '../../../../../type/infoNum';
interface PropType {
    id: number,
    isRead: number,
    type: InfoType
}
const ReadButton = memo((props: PropType) => {
    const { isRead, id, type } = props; 
    const [status, setStatus] = useState(isRead);
    const handleClick = async () => {
        const curStatus = status === 1 ? 2 : 1;
        const res = await putNoticeMsg({ id, isRead: curStatus, type })
        res.code && setStatus(curStatus);
        message.info(res.message);
    }
    return (
        <Button
            onClick={handleClick}
            danger={status === 2}
            style={{ 'marginRight': '20px' }}
        >
            {status === 1 ? '已读' : '未读'}
        </Button >
    )
})

export default ReadButton