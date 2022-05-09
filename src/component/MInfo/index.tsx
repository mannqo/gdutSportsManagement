import { Table, Modal } from 'antd';
import React, { memo } from 'react'
import MChange from '../MChange';
import { useInfo } from './useInfo';

const MInfo = memo((props: { columns: any, getInfo: (page: number) => void, data: any, total: number, TitleComponent?: any }) => {
    const { columns, getInfo, data, total, TitleComponent } = props;
    const {
        addAthlete,
        selectedRowKeys,
        rowSelection,
        onChange,
        visible,
        hideModal
    } = useInfo(getInfo);
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