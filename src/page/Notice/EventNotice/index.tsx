import React, { memo } from 'react'
import { eventInfo } from '../../../type/infoType'
import NoticeModal from '../Component/NoticeModal'

const EventNotice = memo(() => {
    return (
        <NoticeModal type={eventInfo} />
    )
})

export default EventNotice