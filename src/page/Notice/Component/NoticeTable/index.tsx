import { Modal } from 'antd'
import React, { memo, useState } from 'react'
import MDeleteMulti from '../../../../component/MDeleteMulti';
import NoticeForm from '../NoticeForm';
import MTable from './MTable';

const NoticeTable = memo((props: { type: string }) => {
    const [visible, setVisible] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [id, setId] = useState(0);
    const { type } = props;
    const hideModal = () => {
        setVisible(false);
    }
    const onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    const addNotice = (id: number) => {
        setVisible(true);
        setId(id);
    }
    return (
        <>
            <MDeleteMulti add={addNotice} selectedRowKeys={selectedRowKeys} />
            <MTable type={type}
                onSelectChange={onSelectChange} />
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