import { Table, Modal, Button } from 'antd';
import React, { memo } from 'react'
import MDeleteMulti from '../MDeleteMulti';
import MSearch from '../MSelector/MSearch';
import MUploadExcel from '../MUploadExcel/MUploadBtn';
import { useInfo } from './useInfo';

interface PropType<T> {
    info?: T[],
    columns: any,
    getInfo: (page: number) => void, data: any, total: number,
    TitleComponent?: any,
    deleteMulti?: (ids: Array<number>) => void,
    changeData?: (data: any, total: number) => void,
    searchMsg?: any,
    type?: string,
}
interface Type {
    name: string;
    label: string;
}
const MInfo = <T extends Type>(props: PropType<T>) => {
    const { columns, getInfo, data, total, TitleComponent, deleteMulti, changeData, searchMsg, info } = props;
    const { type } = props;
    const {
        add,
        selectedRowKeys,
        rowSelection,
        onChange,
        visible,
        hideModal
    } = useInfo(getInfo);

    return (
        <>
            <MSearch changeData={changeData} searchMsg={searchMsg} info={info} />
            <MDeleteMulti add={add} deleteMulti={deleteMulti} selectedRowKeys={selectedRowKeys} />
            <MUploadExcel type={type} />
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
}

export default MInfo;