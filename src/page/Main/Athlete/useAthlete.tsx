import { DeleteOutlined, ExclamationCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { deleteAthleteMsg, deleteMultAthleteMsg, getAthleteMsg } from "../../../services/athlete";

export const useAthlete = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数 
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);

    /* 运动员信息列表 */
    const athleteColumns = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '学校名称',
            dataIndex: 'schoolName',
        },
        {
            title: '中文姓名',
            dataIndex: 'chineseName',
        },
        {
            title: '运动项目',
            dataIndex: 'sportProject',
        },
        {
            title: '组别',
            dataIndex: 'inGroup',
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
                <DeleteOutlined onClick={() => deleteAthlete(id)} />
            )
        },
    ];

    const viewDetails = (id: number) => {
        setId(id);
        setVisible(true);
    }

    /* 删除运动员信息 */
    const deleteAthlete = (id: number) => {
        Modal.confirm({
            title: '确定要删除该运动员吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteAthleteMsg({ id });
                Modal.info({
                    title: res.message,
                })
                getAthleteInfo(page);
            }
        });
    }
    /* 批量删除运动员信息 */
    const deleteMultiAthlete = (ids: Array<number>) => {
        Modal.confirm({
            title: '确定要删除这些运动员吗?',
            content: `删除的运动员id分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteMultAthleteMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getAthleteInfo(page);
            }
        });
    }

    /* 获取运动员列表 */
    const getAthleteInfo = async (page: number) => {
        setPage(page);
        const res = await getAthleteMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    /* 运动员信息表 */
    const hideModal = () => {
        setVisible(false);
    }
    return {
        athleteColumns,
        getAthleteInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiAthlete
    }
}