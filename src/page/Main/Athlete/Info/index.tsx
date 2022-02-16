import { Modal } from 'antd';
import React, { memo, useState } from 'react'
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteAthleteMsg, getAthleteMsg } from '../../../../services/athlete';
import MInfo from '../../../../component/MInfo';
import MAthleteModal from '../../../../component/MAthleteModal';

const AthleteInfo = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数 
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);

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
            dataIndex: 'group',
        },
        {
            title: '详情',
            dataIndex: 'id',
            render: (id: string) => (
                <div onClick={viewDetails}>
                    <SettingOutlined />
                    <span>查看/修改</span>
                </div>
            )
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: string) => (
                <DeleteOutlined onClick={() => deleteAthlete(id)} />
            )
        },
    ];

    const viewDetails = () => {
        setVisible(true);
    }

    /* 删除运动员信息 */
    const deleteAthlete = (id: string) => {
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

    /* 获取运动员列表 */
    const getAthleteInfo = async (page: number) => {
        setPage(page);
        const res = await getAthleteMsg({ pn: page, size: 10 });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    /* 运动员信息表 */
    const hideModal = () => {
        setVisible(false);
    }
    return (
        <>
            <MInfo
                columns={athleteColumns}
                getInfo={getAthleteInfo}
                data={data}
                total={total}
                TitleComponent={<MAthleteModal />}
            />
            <Modal
                title={<MAthleteModal />}
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

export default AthleteInfo;