import { Select, Input, Modal } from 'antd'
import React, { memo, useState } from 'react'
import styled from 'styled-components';
import { athleteBaseInfo } from '../../../constant/athlete';
import { getAthleteMsg } from '../../../services/athlete';

const { Option } = Select;
interface Obj {
    [key: string]: any;
}
const MSearch = memo((props: {
    changeData?: (data: any, total: number) => void
    searchMsg?: any
    info?: any
}) => {
    const { changeData } = props;
    const [condition, setCondition] = useState<string>('');
    function handleChange(value: string) {
        setCondition(value);
    }
    async function handleSearch(value: any) {
        const obj: Obj = {}
        obj[condition] = value
        const res = await getAthleteMsg(obj);
        const { data, total } = res;
        if (data) {
            changeData && changeData(data.records, total);
        } else {
            Modal.info({
                title: res.message,
            })
        }
    }
    return (
        <SeachContainer>
            <Select
                className='search_select'
                // defaultValue={{ value: '学号' }}
                placeholder='筛选条件'
                style={{ width: 120 }}
                onChange={handleChange}
            >
                {
                    athleteBaseInfo.map(item => (
                        <Option key={item.name} value={item.name}>{item.label}</Option>
                    ))
                }
            </Select>
            <Input.Search onSearch={handleSearch} className='search_input' placeholder="筛选内容" />
        </SeachContainer>
    )
})

const SeachContainer = styled.div`
    display: flex; 
    float: left;
    margin-top: 10px;
    .search_input {
        width: 200px;
    }
`

export default MSearch