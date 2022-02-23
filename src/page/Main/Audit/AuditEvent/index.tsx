import React, { memo, useState } from 'react'
import { Tabs, Table } from 'antd';
import MInfo from '../../../../component/MInfo';

const { TabPane } = Tabs;

const AuditEvent = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数 

    const callback = (key: any) => {
        console.log(key);
    }
    const notyetColumns = [
        {
            title: '申请者姓名',
            dataIndex: 'name',
        },
        {
            title: '申请时间',
            dataIndex: 'time'
        },
        {
            title: '申请内容',
            dataIndex: 'content'
        },
        {
            title: '操作',
            dataIndex: 'operation'
        }
    ]
    const alreadyColumns = [
        {
            title: '申请者姓名',
            dataIndex: 'name',
        },
        {
            title: '申请时间',
            dataIndex: 'time'
        },
        {
            title: '申请内容',
            dataIndex: 'content'
        },
        {
            title: '审核意见',
            dataIndex: 'auditIdea'
        },
        {
            title: '审核时间',
            dataIndex: 'auditTime'
        },
    ]
    const getInfo = () => {

    }

    const onChange = () => {

    }
    return (
        <>
            <Tabs defaultActiveKey="notyet" onChange={callback}>
                <TabPane tab="未审核" key="notyet">
                    <Table
                        columns={notyetColumns}
                        dataSource={data}
                        rowKey='id'
                        pagination={{ total, onChange }}
                    />
                </TabPane>
                <TabPane tab="已审核" key="already">
                    <Table
                        columns={alreadyColumns}
                        dataSource={data}
                        rowKey='id'
                        pagination={{ total, onChange }}
                    />
                </TabPane>
            </Tabs>
        </>


    )
})

export default AuditEvent