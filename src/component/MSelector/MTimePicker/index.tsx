import { DatePicker, Row, TimePicker } from 'antd';
import React, { memo } from 'react'
import styled from 'styled-components';

const MTimePicker = memo(() => {
    const dateFormat = 'YYYY-MM-DD';
    const timeFormat = 'HH:mm';
    return (
        <PickContainer>
            <DatePicker placeholder='选择日期' format={dateFormat} />
            <TimePicker placeholder='选择时间' format={timeFormat} />
        </PickContainer>

    )
})

const PickContainer = styled.div`
    display: flex;
`

export default MTimePicker