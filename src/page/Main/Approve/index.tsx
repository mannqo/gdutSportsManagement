import React, { memo, useEffect, useState } from 'react'
import { Tabs, Table, Button } from 'antd';
import { getApproveMsg } from '../../../services/approve';
import MEventModal from '../../../component/MEventModal';
import Modal from 'antd/lib/modal/Modal';
import { CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons';
import { useApprove } from './useApprove';

const { TabPane } = Tabs;

const ApproveEvent = memo(() => {
    const {
        notyetColumns,
        alreadyColumns,
        hideModal,
        total1, total2,
        visible1, visible2,
        id, data,
        onChange
    } = useApprove();
    return (
        <>
            <Tabs defaultActiveKey="notyet"  >
                <TabPane tab="未审核" key="notyet">
                    <Table
                        columns={notyetColumns}
                        dataSource={data.length ? data.filter((item: any) => item.state === 1) : []}
                        rowKey='id'
                        pagination={{ total: total1, onChange }}
                    />
                </TabPane>
                <TabPane tab="已审核" key="already">
                    <Table
                        columns={alreadyColumns}
                        dataSource={data.length ? data.filter((item: any) => item.state === 2) : []}
                        rowKey='id'
                        pagination={{ total: total2, onChange }}
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