import { Select } from 'antd'
import React, { memo } from 'react'

const { Option } = Select;

const MPicker = memo(() => {
    return (
        <Select>
            <Option value="1">男</Option>
            <Option value="2">女</Option>
        </Select>
    )
})

export default MPicker