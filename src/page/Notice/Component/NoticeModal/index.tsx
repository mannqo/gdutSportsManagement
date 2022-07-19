import React, { memo } from 'react'
import { List, Skeleton, Table } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './index.css' 
import { useList } from './useList';
import { InfoType } from '../../../../type/infoNum';


const NoticeModal = memo((props: { type: InfoType }) => {
    const { type } = props;
    const { data, total, onChange, noticeColumns } = useList(type);
    return (
        <>
            <Table
                columns={noticeColumns}
                dataSource={data}
                rowKey='id'
                pagination={{ total, onChange, pageSizeOptions: ['10'] }}
            />
        </>

    );
})

export default NoticeModal;