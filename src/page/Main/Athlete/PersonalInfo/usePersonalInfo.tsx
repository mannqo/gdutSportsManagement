import { SettingOutlined } from '@ant-design/icons';
import React, { memo, useEffect, useState } from 'react'
import { getPersonalEventMsg } from '../../../../services/event';

const usePersonalInfo = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const number = localStorage.getItem('number');

    const personalEventColumns = [
        {
            title: '比赛名称',
            dataIndex: 'competitionName',
        },
        {
            title: '比赛时间',
            dataIndex: 'competitionTime'
        },
        {
            title: '查看详情',
            dataIndex: 'id',
            render: (id: number) => (
                <div>
                    <SettingOutlined />
                </div>
            )
        }
    ]
    const getPersonalInfo = async (page: number) => {
        const res = await getPersonalEventMsg({ pn: page, number }); 
        const { data: { records, total } } = res;
        setData(records);
        setTotal(total);

    }
    const onChange = (page: number) => {
        getPersonalInfo(page);
    }
    useEffect(() => {
        getPersonalInfo(1);
    }, [])

    return {
        personalEventColumns,
        data,
        total,
        onChange
    }
}

export default usePersonalInfo