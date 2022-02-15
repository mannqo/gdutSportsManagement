import { Modal } from 'antd';
import React, { memo, useState } from 'react'
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteAthleteMsg, getAthleteMsg } from '../../../../services/athlete';
import MInfo from '../../../../component/MInfo';
import MInfoTable from '../../../../component/MAthleteModal';

const AthleteInfo = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数

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
            title: '年级班级',
            dataIndex: 'levelClass',
        },
        {
            title: '教练',
            dataIndex: 'belongCoach',
            render: (coach: any) => (
                <span>{JSON.parse(coach).toString()}</span>
            )
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: string) => (
                <div>
                    <SettingOutlined />
                    &nbsp; &nbsp;
                    <DeleteOutlined onClick={() => deleteAthlete(id)} />
                </div>
            )
        },
    ];

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
            }
        });
    }

    /* 获取运动员列表 */
    const getAthleteInfo = async (page: number) => {
        const res = await getAthleteMsg({ pn: page, size: 10 });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    return (
        <MInfo
            columns={athleteColumns}
            getInfo={getAthleteInfo}
            data={data}
            total={total}
            TitleComponent={<MInfoTable />}
        />
    )
})

export default AthleteInfo;