import { Select } from 'antd'
import React, { memo } from 'react'

interface Item {
    value: string,
    label: string,
    content: string,
    optionList: Array<string>
}
const { Option } = Select;

const MPicker = memo((props: { item: Item }) => {
    console.log(props);

    const { item } = props;
    return (
        <Select placeholder={`选择${item.label}`}>
            {
                item.optionList && item.optionList.map((item: any) => (
                    <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                ))
            }
        </Select>
    )
})

export default MPicker