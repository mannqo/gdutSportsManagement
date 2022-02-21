import React, { memo, useState } from 'react'
import MInfo from '../../../../component/MInfo'
import { deleteCoachMsg, getCoachMsg } from '../../../../services/coach'
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal } from 'antd';
import MCoachModal from '../../../../component/MCoachModal';

const CoachInfo = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState('0'); 

    const coachColumn = [
        {
            title: '工号',
            dataIndex: 'number',
        },
        {
            title: '名字',
            dataIndex: 'name',
        },
        {
            title: '出生日月',
            dataIndex: 'birth',
        },
        {
            title: '职称',
            dataIndex: 'professionName',
        },
        {
            title: '详情',
            dataIndex: 'id',
            render: (id: string) => (
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
                <DeleteOutlined onClick={() => deleteCoach(id)} />
            )
        },
    ]

    const viewDetails = (id: string) => {
        setId(id);
        setVisible(true);
    }

    /* 获取教练个人信息 */
    const getCoachInfo = async (page: number) => {
        const res = await getCoachMsg({ pn: page });
        const { data } = res;
        setTotal(data.total);
        setData(data.records);
    }

    /* 删除教练信息 */
    const deleteCoach = (id: string) => {
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
            }
        });
    }
    const hideModal = () => {
        setVisible(false);
    }
    return (
        <>
            <MInfo
                columns={coachColumn}
                getInfo={getCoachInfo}
                data={data}
                total={total}
                TitleComponent={<MCoachModal />}
            />

            <Modal
                title={<MCoachModal id={id} />}
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

export default CoachInfo