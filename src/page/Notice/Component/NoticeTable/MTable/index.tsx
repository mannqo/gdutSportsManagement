import { Table } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { getNoticeMsg } from '../../../../../services/notice';
import { noticeColumns } from './constant';
import useNotice from './useNotice';


const NoticeTable = memo((props: { type: string, onSelectChange: any }) => {
    const { type, onSelectChange } = props;
    const { dataSource, total, onChange } = useNotice(type);
    const rowSelection = {
        onChange: onSelectChange,
    };
    
    return (
        <Table
            rowKey='id'
            rowSelection={rowSelection}
            columns={noticeColumns}
            dataSource={dataSource}
            pagination={{ total, onChange }}
        /> 
    )
})

export default NoticeTable