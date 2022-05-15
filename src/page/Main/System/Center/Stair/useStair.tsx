import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { getStairMsg } from "../../../../../services/system";

export const useStair = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    const stairColumn = [
        {
            title: '组织名称',
            dataIndex: 'name',
        },
        {
            title: '分管领导',
            dataIndex: 'chargeLeader',
        },
        {
            title: '部门领导',
            dataIndex: 'departmentLeader',
        },
        {
            title: '详情',
            dataIndex: 'id',
            render: (id: number) => (
                <div onClick={() => viewDetails(id)}>
                    <SettingOutlined />
                    <span>查看/修改</span>
                </div>
            )
        },
    ]

    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }
    const getStairInfo = async (page: number) => {
        setPage(page);
        const res = await getStairMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }
    const hideModal = () => {
        setVisible(false);
    }
    return {
        stairColumn,
        getStairInfo,
        data,
        total,
        id,
        visible,
        hideModal,
    }
}