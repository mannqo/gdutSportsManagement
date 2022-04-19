import React, { memo, useEffect, useState } from 'react'
import { Tabs, Table, Button } from 'antd';
import { getApproveMsg } from '../../../../services/approve';
import MEventModal from '../../../../component/MEventModal';
import Modal from 'antd/lib/modal/Modal';
import { CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons';

const { TabPane } = Tabs;
const statusMapText = {
    '1': '未审核',
    '2': '已审核'
}

const ApproveEvent = memo(() => {
    const [data, setData] = useState([]);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [id, setId] = useState('0');
    let total1 = 0;
    let total2 = 0;

    const callback = (key: any) => {
        console.log(key);
    }
    const notyetColumns = [
        {
            title: '申请者学号',
            dataIndex: 'resourceNumber',
        },
        {
            title: '申请时间',
            dataIndex: 'time'
        },
        {
            title: '审核状态',
            dataIndex: 'state',
            render: () => (
                <>
                    <ExclamationCircleTwoTone twoToneColor="#eb2f96" />
                    <span>{statusMapText[1]}</span>
                </>

            )
        },
        {
            title: '申请内容',
            dataIndex: 'contentId',
            render: (id: string) => (
                <div onClick={() => viewDetail1(id)}>
                    <Button type='primary' size='small'>查看详情</Button>
                </div >
            )
        },
    ]
    const alreadyColumns = [
        {
            title: '审核人工号',
            dataIndex: 'number',
        },
        {
            title: '审核意见',
            dataIndex: 'message'
        },
        {
            title: '审核时间',
            dataIndex: 'approveTime'
        },
        {
            title: '申请内容',
            dataIndex: 'contentId',
            render: (id: string) => (
                <div onClick={() => viewDetail2(id)}>
                    <Button type='primary' size='small'>查看详情</Button>
                </div >
            )
        },
        {
            title: '审核状态',
            dataIndex: 'state',
            render: () => (
                <>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <span>{statusMapText[2]}</span>
                </>
            )
        },
    ]
    const viewDetail1 = (id: string) => {
        setId(id);
        setVisible1(true);
    }
    const viewDetail2 = (id: string) => {
        setId(id);
        setVisible2(true);
    }
    const hideModal = () => {
        setVisible1(false);
        setVisible2(false);
    }
    const getApproveInfo = async (page: number) => {
        const res = await getApproveMsg({ pn: page, size: 10 })
        const { data } = res;
        setData(data.records);
        total1 = data.length ? data.filter((item: any) => item.state === 1).length : 0;
        total2 = data.length ? data.filter((item: any) => item.state === 2).length : 0;
    }

    const onChange = () => {

    }
    useEffect(() => {
        getApproveInfo(1);
    }, [])
    return (
        <>
            <Tabs defaultActiveKey="notyet" onChange={callback}>
                <TabPane tab="未审核" key="notyet">
                    <Table
                        columns={notyetColumns}
                        dataSource={data.length ? data.filter((item: any) => item.state === 1) : []}
                        rowKey='id'
                        pagination={{ total: total1, onChange }}
                    />
                </TabPane>
                <TabPane tab="已审核" key="already">
                    <Table
                        columns={alreadyColumns}
                        dataSource={data.length ? data.filter((item: any) => item.state === 2) : []}
                        rowKey='id'
                        pagination={{ total: total2, onChange }}
                    />
                </TabPane>
            </Tabs>
            <Modal
                title={<MEventModal id={id} type='approve' />}
                visible={visible1}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                footer={(<></>)}
            />
            <Modal
                title={<MEventModal id={id} />}
                visible={visible2}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                footer={(<></>)}
            />
        </>


    )
})

export default ApproveEvent