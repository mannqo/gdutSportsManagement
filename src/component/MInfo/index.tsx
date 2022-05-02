import { Button, Table, Modal } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import MChange from '../MChange';

const MInfo = memo((props: { columns: any, getInfo: any, data: any, total: number, TitleComponent?: any }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [visible, setVisible] = useState(false);
    const { columns, getInfo, data, total, TitleComponent } = props;

    const addAthlete = () => {
        setVisible(true);
    }
    /* 运动员信息表 */
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

    const onChange = (page: number) => {
        getInfo(page);
    }

    useEffect(() => {
        getInfo(1);
    }, [])

    return (
        <>
            <MChange add={addAthlete} selectedRowKeys={selectedRowKeys} />
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                rowKey='id'
                pagination={{ total, onChange }}
            />
            <Modal
                title={TitleComponent}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
                okText="完成"
                cancelText="取消"
            />
        </>
    )
})

export default MInfo;