import { DeleteOutlined, ExclamationCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { deleteCoachMsg, deleteMultCoachMsg, getCoachMsg } from "../../../../../services/coach";

export const useCoach = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    const coachColumn = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '工号',
            dataIndex: 'number',
        },
        {
            title: '名字',
            dataIndex: 'name',
        },
        {
            title: '负责项目',
            dataIndex: 'projectGroup',
            render: (coach: Array<string>) => (
                <span>{coach.join(' ; ')}</span>
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
                <DeleteOutlined onClick={() => deleteCoach(id)} />
            )
        },
    ]

    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }

    /* 获取教练个人信息 */
    const getCoachInfo = async (page: number) => {
        setPage(page);
        const res = await getCoachMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    /* 删除教练信息 */
    const deleteCoach = (id: number) => {
        Modal.confirm({
            title: '确定要删除该教练的信息吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteCoachMsg({ id });
                Modal.info({
                    title: res.message,
                })
                getCoachInfo(page);
            }
        });
    }
    const deleteMutiCoach = (ids: Array<number>) => {
        Modal.confirm({
            title: '确定要删除这些教练吗?',
            content: `删除的教练序号分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteMultCoachMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getCoachInfo(page);
            }
        });
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
        coachColumn,
        getCoachInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMutiCoach,
        changeData
    }
}