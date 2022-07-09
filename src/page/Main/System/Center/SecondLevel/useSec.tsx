import { DeleteOutlined, ExclamationCircleOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteSecMsg, getSecMsg } from "../../../../../services/system";

export const useSec = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    const secColumn = [
        { title: '序号', dataIndex: 'id', },
        { title: '所属一级组织', dataIndex: 'oneOrg' },
        { title: '组织名称', dataIndex: 'name', },
        {
            title: '修改', dataIndex: 'id',
            render: (id: number) => (
                <div onClick={() => viewDetails(id)}>
                    <SettingOutlined />
                </div>
            )
        },
        {
            title: '查看详情',
            dataIndex: 'id',
            render: (id: number) => (
                <NavLink to={{
                    pathname: '/systemManage/framework/secDetails',
                    state: { id: id }
                }}>
                    <SearchOutlined />
                </NavLink>
            )
        },
        {
            title: '删除操作',
            dataIndex: 'id',
            render: (id: number) => (
                <div>
                    <DeleteOutlined onClick={() => deleteSec(id)} />
                </div>
            )
        },
    ]
    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }
    /* 删除一级组织 */
    const deleteSec = (id: number) => {
        Modal.confirm({
            title: '确定要删除该二级组织吗?',
            okText: '确认',
            cancelText: '取消',
            icon: <ExclamationCircleOutlined />,
            onOk: async () => {
                const res = await deleteSecMsg({ id });
                Modal.info({
                    title: res.message,
                })
                getSecInfo(page);
            }
        })
    }
    /* 批量删除一级组织 */
    const deleteMultiSec = (ids: number[]) => {
        Modal.confirm({
            title: '确定要删除该二级组织吗?',
            content: `删除的二级组织序号分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteSecMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getSecInfo(page);
            }
        })
    }
    const getSecInfo = async (page: number) => {
        setPage(page);
        const res = await getSecMsg({ pn: page });
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
        setTotal(total);
    }
    return {
        secColumn,
        getSecInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiSec,
        changeData
    }
}