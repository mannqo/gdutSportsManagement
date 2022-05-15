import { useState } from "react";
import { getSecMsg } from "../../../../../services/system";

export const useSec = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const secColumn = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '所属一级组织',
            dataIndex: 'oneOrg'
        },
        {
            title: '组织名称',
            dataIndex: 'name',
        }
    ]
    const getSecInfo = async (page: number) => {
        setPage(page);
        const res = await getSecMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }
    return {
        secColumn,
        getSecInfo,
        data,
        total,
    }
}