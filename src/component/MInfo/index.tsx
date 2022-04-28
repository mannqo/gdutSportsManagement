import { Button, Table, Modal } from 'antd';
import React, { memo, useEffect, useState } from 'react'

const MInfo = memo((props: { columns: any, getInfo: any, data: any, total: number, TitleComponent?: any }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const { columns, getInfo, data, total, TitleComponent } = props;


    const deleteAll = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedRowKeys([]);
        }, 1000);
    };
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
    const hasSelected = selectedRowKeys.length > 0;


    const onChange = (page: number) => {
        getInfo(page);
    }

    useEffect(() => {
        getInfo(1);
    }, [])

    return (
        <>
            <div style={{ margin: 16, float: 'right' }}>
                <Button type='primary' onClick={addAthlete}> 新增 </Button>
                <Button onClick={deleteAll} disabled={!hasSelected} loading={loading}>
                    批量删除
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
                </span>
            </div>

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