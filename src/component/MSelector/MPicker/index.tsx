import { Select } from 'antd'
import React, { memo } from 'react'

const { Option } = Select;

const MPicker = memo((props: any) => { 
    const { optionList } = props; 

    return (
        <Select>
            {
                optionList.map((item: any) => (
                    <Option key={item.value} value={item.value}>{item.content}</Option>
                ))
            }

        </Select>
    )
})

export default MPicker