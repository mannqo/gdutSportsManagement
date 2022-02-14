import { Button, Table } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { getAthleteMsg } from '../../../../services/athlete';
import { UserDeleteOutlined } from "@ant-design/icons";



const Info = memo(() => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数

    const columns = [
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
        // {
        //     title: '运动项目组别',
        //     dataIndex: 'address',
        // },
        {
            title: '操作',
            dataIndex: 'handle',
            render: () => (
                <UserDeleteOutlined />
            )
        },
    ];

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedRowKeys([]);
        }, 1000);
    };
    const onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const onChange = async (page: any) => {
        const res = await getAthleteMsg({ pn: page, size: '10' });
        const { data } = res;

        data.records.forEach((item: any) => {
            item.key = item.id;
            item.belongCoach = JSON.parse(item.belongCoach).toString();
        })
        setTotal(data.total);
        setData(data.records);
    }

    useEffect(() => {

        const getInfo = async () => {
            const res = await getAthleteMsg({ pn: '1', size: '10' });
            const { data } = res;
            setTotal(data.total);
            setData(data.records);
        }
        getInfo();

    }, [])

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey='id'
                pagination={{ total: total, onChange: onChange }} />
        </div>
    )
})

export default Info;