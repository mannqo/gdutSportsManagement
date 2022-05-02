import { DeleteOutlined, ExclamationCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import MChange from '../../../../component/MChange';
import { deleteNoticeMsg, getNoticeMsg } from '../../../../services/notice';
import NoticeForm from '../NoticeForm';


const NoticeTable = memo((props: { type: string }) => {

    const [dataSource, setDataSource] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [total, setTotal] = useState(0);
    const [id, setId] = useState('0');
    const { type } = props;
    const hideModal = () => {
        setVisible(false);
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

    const viewDetails = (id: string) => {
        setVisible(true);
        setId(id);
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
        <>
            <MChange add={viewDetails} selectedRowKeys={selectedRowKeys} />
            <Table
                rowKey='id'
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
                pagination={{ total, onChange }}
            />
            <Modal
                title={<NoticeForm type={type} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                okText="完成"
                cancelText="取消"
            ></Modal>
        </>

    )
})

export default NoticeTable