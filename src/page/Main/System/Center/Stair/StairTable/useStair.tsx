import { DeleteOutlined, ExclamationCircleOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteStairMsg, getStairMsg } from "../../../../../../services/system";

export const useStair = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    const stairColumn = [
        {
            title: '序号',
            dataIndex: 'id'
        },
        {
            title: '组织编码',
            dataIndex: 'code',
        },
        {
            title: '组织名称',
            dataIndex: 'name',
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
        {
            title: '查看详情',
            dataIndex: 'name',
            render: (name: string) => (
                <NavLink to={{
                    pathname: '/systemManage/framework/stair/secLevel',
                    state: { oneOrg: name }
                }}>
                    <SearchOutlined />
                </NavLink>
            )
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: number) => (
                <DeleteOutlined onClick={() => deleteStair(id)} />
            )
        },
    ]

    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }

    /* 删除一级组织 */
    const deleteStair = (id: number) => {
        Modal.confirm({
            title: '确定要删除该一级组织吗?',
            okText: '确认',
            cancelText: '取消',
            icon: <ExclamationCircleOutlined />,
            onOk: async () => {
                const res = await deleteStairMsg({ id });
                Modal.info({
                    title: res.message,
                })
                getStairInfo(page);
            }
        })
    }
    /* 批量删除一级组织 */
    const deleteMultiStair = (ids: Array<number>) => {
        Modal.confirm({
            title: '确定要删除这些一级组织吗?',
            content: `删除的一级组织序号分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteStairMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getStairInfo(page);
            }
        })
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
    /* 查询时更改data */
    const changeData = (data: any, total: number) => {
        setData(data);
        setTotal(total)
    }
    return {
        stairColumn,
        getStairInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiStair,
        changeData
    }
}