import React, { useEffect, useState } from 'react'
import { getNoticeMsg } from '../../../../../services/notice';

export const useNotice = ((type: string) => {
    const [dataSource, setDataSource] = useState([]);
    const [total, setTotal] = useState(0);
    const getNotice = async (pn: number, type: string) => {
        const res = await getNoticeMsg({ pn, type });
        const { data } = res;
        if (data) {
            setTotal(data.total);
            setDataSource(data.records);
        } else {
            setTotal(0);
            setDataSource([]);
        }
    }
    const onChange = (page: number) => {
        getNotice(page, type);
    }
    useEffect(() => {
        getNotice(1, type);
    }, [type])

    return {
        dataSource,
        total,
        onChange
    }
})

export default useNotice