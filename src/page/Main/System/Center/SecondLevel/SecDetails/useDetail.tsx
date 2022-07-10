import { DeleteOutlined, ExclamationCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { deleteAthleteMsg, deleteMultAthleteMsg } from '../../../../../../services/athlete';
import { getSecondById } from '../../../../../../services/system';

const useDetail = (props: { id: number }) => {
    const { id } = props;
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数 
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [athleteId, setAthleteId] = useState(0);

    /* 运动员信息列表 */
    const athleteColumns = [
        {
            title: '序号',
            dataIndex: 'id',
        },
        {
            title: '中文姓名',
            dataIndex: 'chineseName',
        },
        {
            title: '运动项目',
            dataIndex: 'projectGroup',
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
        setAthleteId(id);
        setVisible(true);
    }

    /* 获取运动员列表 */
    const getAthletes = async (page: number) => {
        setPage(page);
        const res = await getSecondById(id);
        console.log(res);

        const { data } = res;
        setData(data.records);
        setTotal(data.total);
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
                getAthletes(page);
            }
        });
    }
    /* 批量删除运动员信息 */
    const deleteMultiAthlete = (ids: Array<number>) => {
        Modal.confirm({
            title: '确定要删除这些运动员吗?',
            content: `删除的运动员序号分别为${ids.join(',')}`,
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteMultAthleteMsg(ids);
                Modal.info({
                    title: res.message,
                })
                getAthletes(page);
            }
        });
    }

    /* 运动员信息表 */
    const hideModal = () => {
        setVisible(false);
    }

    /* 查询时更改data */
    const changeData = (data: any, total: number) => {
        setData(data);
        setTotal(total)
    }
    useEffect(() => {
        getAthletes(page);
    }, [])

    return {
        athleteColumns,
        getAthletes,
        data,
        total,
        athleteId,
        visible,
        hideModal,
        deleteMultiAthlete,
        changeData
    }
}

export default useDetail