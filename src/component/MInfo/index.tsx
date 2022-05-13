import { Table, Modal } from 'antd';
import React, { memo } from 'react'
import MChange from '../MDeleteMulti';
import MSearch from '../MSelector/MSearch';
import { useInfo } from './useInfo';

const MInfo = memo((props: { columns: any, getInfo: (page: number) => void, data: any, total: number, TitleComponent?: any, deleteMulti?: (ids: Array<number>) => void }) => {
    const { columns, getInfo, data, total, TitleComponent, deleteMulti } = props;
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
            <MSearch></MSearch>
            <MChange add={addAthlete} deleteMulti={deleteMulti} selectedRowKeys={selectedRowKeys} />
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