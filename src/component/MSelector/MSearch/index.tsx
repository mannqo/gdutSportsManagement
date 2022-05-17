import { Select, Input, Modal } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components';

const { Option } = Select;
interface PropType<T> {
    info?: T[],
    changeData?: (data: any, total: number) => void,
    searchMsg?: any
}
interface Type {
    name: string;
    label: string;
}
interface Obj {
    [key: string]: any;
}
type Visible = 'block' | 'none'
const MySearch = <T extends Type>(props: PropType<T>) => {
    const { changeData, info, searchMsg } = props;
    const [condition, setCondition] = useState<string>('');
    const [visible, setVisible] = useState<Visible>('block');
    async function handleChange(value: string) {
        setCondition(value);
        if (value === 'all') {
            setVisible('none');
            const res = await searchMsg({ pn: 1 });
            const { data, total } = res;
            changeData && changeData(data.records, total);
        } else { setVisible('block'); }
    }
    async function handleSearch(value: any) {
        if (condition !== 'all') {
            const obj: Obj = {};
            obj[condition] = value
            const res = await searchMsg(obj);
            const { data, total } = res;
            if (data) {
                changeData && changeData(data.records, total);
            } else {
                Modal.info({
                    title: res.message,
                })
            }
        } else {
            Modal.info({
                title: '请根据不同搜索条件进行搜索',
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
                onChange={handleChange} autoClearSearchValue
            >
                <Option key='all' value='all'>全部</Option>
                {
                    info && info.map(item => (
                        <Option key={item.name} value={item.name}>{item.label}</Option>
                    ))
                }
            </Select>
            <Input.Search
                onSearch={handleSearch}
                className='search_input'
                placeholder="筛选内容"
                style={{ 'display': visible }}
            />
        </SeachContainer>
    )
}

const SeachContainer = styled.div`
    display: flex; 
    float: left;
    margin-top: 10px;
    .search_input {
        width: 200px;
    }
`
export default MySearch