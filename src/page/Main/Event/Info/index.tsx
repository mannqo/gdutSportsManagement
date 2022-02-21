import React, { memo, useState } from 'react'
import MInfo from '../../../../component/MInfo'
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteEventMsg, getEventMsg } from '../../../../services/event';
import { Modal } from 'antd';
import MEventModal from '../../../../component/MEventModal';

const EventInfo = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState('0');

    /* 个人比赛信息列表 */
    const eventColumn = [
        {
            title: '名称',
            dataIndex: 'desgination',
        },
        {
            title: '运动员姓名',
            dataIndex: 'name',
            render: (athlete: any) => (
                <span>{JSON.parse(athlete).toString()}</span>
            )
        },
        {
            title: '教练',
            dataIndex: 'coach',
            render: (coach: any) => (
                <span>{JSON.parse(coach).toString()}</span>
            )
        },
        {
            title: '详情',
            dataIndex: 'id',
            render: () => (
                <div onClick={() => viewDetails(id)}>
                    <SettingOutlined />
                    <span>查看/修改</span>
                </div>
            )
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: string) => (
                <div>
                    <DeleteOutlined onClick={() => deleteEvent(id)} />
                </div>
            )
        },
    ];

    const viewDetails = (id: string) => {
        setId(id);
        setVisible(true);
    }

    /* 删除比赛信息 */
    const deleteEvent = (id: string) => {
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
            }
        });
    }

    /* 获取个人比赛信息 */
    const getEventInfo = async (page: number) => {
        const res = await getEventMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    const hideModal = () => {
        setVisible(false);
    }

    return (
        <>
            <MInfo
                columns={eventColumn}
                getInfo={getEventInfo}
                data={data}
                total={total}
                TitleComponent={<MEventModal />}
            />
            <Modal
                title={<MEventModal id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                okText="确认"
                cancelText="取消"
            />
        </>

    )
})

export default EventInfo