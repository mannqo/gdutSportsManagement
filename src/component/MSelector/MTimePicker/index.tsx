import { DatePicker, TimePicker } from 'antd';
import React, { memo } from 'react'

const MTimePicker = memo(() => {
    const dateFormat = 'YYYY-MM-DD';
    const timeFormat = 'HH:mm';
    return (
        <>
            <DatePicker placeholder='选择日期' format={dateFormat} />
            <TimePicker placeholder='选择时间' format={timeFormat} />
        </>

    )
})

export default MTimePicker