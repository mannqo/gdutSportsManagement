import React, { memo } from 'react'
import { Tabs, Table, Button } from 'antd';
import MEventModal from '../../../component/MEventModal';
import Modal from 'antd/lib/modal/Modal';
import { useApprove } from './useApprove';

const { TabPane } = Tabs;

const ApproveEvent = memo(() => {
    const {
        notyetColumns,
        alreadyColumns,
        visible1, visible2,
        id, data,
        total,
        hideModal,
        onChange,
        handleTabChange
    } = useApprove();
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={handleTabChange} >
                <TabPane tab="未审核" key="1">
                    <Table
                        columns={notyetColumns}
                        dataSource={data}
                        rowKey='id'
                        pagination={{ total, onChange }}
                    />
                </TabPane>
                <TabPane tab="已审核" key="2">
                    <Table
                        columns={alreadyColumns}
                        dataSource={data}
                        rowKey='id'
                        pagination={{ total, onChange }}
                    />
                </TabPane>
            </Tabs>
            <Modal
                title={<MEventModal id={id} type='approve' />}
                visible={visible1}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
            <Modal
                title={<MEventModal id={id} />}
                visible={visible2}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>


    )
})

export default ApproveEvent