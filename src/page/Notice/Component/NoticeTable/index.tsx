import { DeleteOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import MChange from '../../../../component/MChange';
import { getNoticeMsg } from '../../../../services/notice';

const columns = [
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
            <DeleteOutlined />
        )
    }
]
const NoticeTable = memo((props: { type: string }) => {

    const [dataSource, setDataSource] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [total, setTotal] = useState(0);
    const { type } = props;
    console.log(type);
    const addNotice = () => {
        setVisible(true);
    }
    const onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const getNotice = async (pn: number, type: string) => {
        const res = await getNoticeMsg({ pn, type });
        const { data } = res;
        setTotal(total);
        data && setDataSource(data.records);
        !data && setDataSource([]);
    }
    const onChange = (page: number) => {
        getNotice(page, type);
    }
    useEffect(() => {
        getNotice(1, type);
    }, [type])
    return (
        <>
            <MChange add={addNotice} selectedRowKeys={selectedRowKeys} />
            <Table
                rowKey='id'
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
                pagination={{ total, onChange }}
            />
            <Modal></Modal>
        </>

    )
})

export default NoticeTable