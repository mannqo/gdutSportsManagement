import React, { memo } from 'react'
import { notice } from '../../../type/infoNum'
import NoticeModal from '../Component/NoticeModal'


const ApproveNotice = memo(() => {
    return (
        <NoticeModal type={notice} />
    )
})

export default ApproveNotice