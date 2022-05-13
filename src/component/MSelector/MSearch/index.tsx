import { Select, Input, Form } from 'antd'
import React, { memo } from 'react'
import { athleteBaseInfo } from '../../../constant/athlete';

const { Option } = Select;
const MSearch = memo(() => {
    function handleChange(value: any) {
        console.log(value);
    }
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}>
            <Form.Item >
                <Select
                    labelInValue
                    defaultValue={{ value: '学号' }}
                    style={{ width: 120 }}
                    onChange={handleChange}
                >
                    {
                        athleteBaseInfo.map(item => (
                            <Option value={item.name}>{item.label}</Option>
                        ))
                    }
                </Select>
            </Form.Item>
            <Form.Item>
                <Input placeholder="Basic usage" />
            </Form.Item>
        </Form>
    )
})

export default MSearch