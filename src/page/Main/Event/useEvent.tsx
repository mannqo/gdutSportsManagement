import { useState } from "react";
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteEventMsg, getEventMsg } from '../../../services/event';
import { Modal } from "antd";

export const useEvent = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    /* 个人比赛信息列表 */
    const eventColumn = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '名称',
            dataIndex: 'desgination',
        },
        {
            title: '运动员姓名',
            dataIndex: 'name',
            render: (athlete: Array<string>) => (
                <span>{athlete.join(',')}</span>
            )
        },
        {
            title: '教练',
            dataIndex: 'coach',
            render: (coach: Array<string>) => (
                <span>{coach.join(',')}</span>
            )
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
            title: '操作',
            dataIndex: 'id',
            render: (id: number) => (
                <div>
                    <DeleteOutlined onClick={() => deleteEvent(id)} />
                </div>
            )
        },
    ];

    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }

    /* 删除比赛信息 */
    const deleteEvent = (id: number) => {
        Modal.confirm({
            title: '确定要删除该比赛信息吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteEventMsg({ id });
                Modal.info({
                    title: res.message,
                })
                getEventInfo(page);
            }
        });
    }
    /* 批量删除比赛信息 */
    const deleteMultiEvent = (ids: Array<number>) => {
        Modal.confirm({
            title: '确定要删除这些比赛信息吗?',
            content: `删除的比赛信息序号分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteEventMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getEventInfo(page);
            }
        });
    }

    /* 获取个人比赛信息 */
    const getEventInfo = async (page: number) => {
        setPage(page);
        const res = await getEventMsg({ pn: page });
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
        eventColumn,
        getEventInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiEvent,
        changeData
    }
}