import React, { memo, useState } from 'react' 
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const AuditEvent = memo(() => {
    const callback = (key: any) => {
        console.log(key);
    }
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </>


    )
})

export default AuditEvent