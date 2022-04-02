import { DatePicker } from 'antd';
import React, { memo } from 'react'

const MDatePicker = memo(() => {
    const dateFormat = 'YYYY-MM-DD';

    return (
        <DatePicker placeholder='选择日期' format={dateFormat} />
    )
})

export default MDatePicker