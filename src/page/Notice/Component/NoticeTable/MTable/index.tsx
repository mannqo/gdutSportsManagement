import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { deleteNoticeMsg, getNoticeMsg } from '../../../../../services/notice';


const NoticeTable = memo((props: { type: string, onSelectChange: any }) => {
    const [dataSource, setDataSource] = useState([]);
    const [total, setTotal] = useState(0);
    const { type, onSelectChange } = props;

    const rowSelection = {
        onChange: onSelectChange,
    };
    const getNotice = async (pn: number, type: string) => {
        const res = await getNoticeMsg({ pn, type });
        const { data } = res;
        if (data) {
            setTotal(data.total);
            setDataSource(data.records);
        } else {
            setTotal(0);
            setDataSource([]);
        }
    }
    const onChange = (page: number) => {
        getNotice(page, type);
    }
    const deleteAthlete = (id: string) => {
        Modal.confirm({
            title: '确定要删除该通知吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await deleteNoticeMsg({ id });
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const columns = [
        {
            title: '编号',
            dataIndex: 'id'
        },
        {
            title: '通知',
            dataIndex: 'message',
        },
        {
            title: '通知对象',
            dataIndex: 'toPerson'
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: string) => (
                <DeleteOutlined onClick={() => deleteAthlete(id)} />
            )
        }
    ]
    useEffect(() => {
        getNotice(1, type);
    }, [type])

    return (
        <Table
            rowKey='id'
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={{ total, onChange }}
        />

    )
})

export default NoticeTable