import { Card } from 'antd';
import React, { memo, useState } from 'react'
import { contentList, tabList, tabType } from './TabList';

const NoticeManage = memo(() => {
    const [activeTabKey, setActiveTabKey] = useState<tabType>('eventNotice');
    const onTabChange = (key: tabType) => {
        setActiveTabKey(key);
    };
    return (
        <Card
            style={{ width: '100% ' }}
            tabList={tabList}
            activeTabKey={activeTabKey}
            // tabBarExtraContent={<a href="#" > More</a>}
            onTabChange={(key: tabType) => {
                onTabChange(key);
            }}
        >
            {contentList[activeTabKey]}
        </Card >
    )
})

export default NoticeManage