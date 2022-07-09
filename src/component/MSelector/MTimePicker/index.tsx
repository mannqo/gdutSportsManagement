import { DatePicker, Row, TimePicker } from 'antd';
import React, { memo } from 'react'

const MTimePicker = memo(() => {
    const dateFormat = 'YYYY-MM-DD';
    const timeFormat = 'HH:mm';
    return (
        <>
            <Row justify='center' align='middle' gutter={[32, 16]}>
                <DatePicker placeholder='选择日期' format={dateFormat} />
                <TimePicker placeholder='选择时间' format={timeFormat} />
            </Row>

        </>

    )
})

export default MTimePicker