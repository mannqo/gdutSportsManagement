import { Button } from 'antd';
import React, { memo, useState } from 'react'

const MDeleteMulti = memo((props: any) => {
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { add, selectedRowKeys, deleteMulti } = props;
    const hasSelected = selectedRowKeys.length > 0;

    const deleteAll = () => {
        deleteMulti(selectedRowKeys);
        setDeleteLoading(true);
        setTimeout(() => {
            setDeleteLoading(false);
        }, 1000);
    };

    return (
        <div className="noticeChange" style={{ float: 'right', margin: 16 }}>
            <Button type='primary' onClick={add}> 新增 </Button>
            <Button onClick={deleteAll} disabled={!hasSelected} loading={deleteLoading}>
                批量删除
            </Button>
            <span style={{ marginLeft: 8 }}>
                {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
            </span>
        </div>
    )
})

export default MDeleteMulti