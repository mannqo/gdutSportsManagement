import { Card } from 'antd';
import React, { memo, useState } from 'react'

const tabList = [
    {
        key: 'article',
        tab: 'article',
    },
    {
        key: 'app',
        tab: 'app',
    },
    {
        key: 'project',
        tab: 'project',
    },
];

const contentList = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};
type tabType = 'app' | 'article' | 'project';
const NoticeManage = memo(() => {
    let activeTabKey: tabType = 'app';
    const onTabChange = (key: tabType) => {
        activeTabKey = key;
    };
    return (
        <>
            <Card
                style={{ width: '100%' }}
                tabList={tabList}
                activeTabKey={activeTabKey}
                tabBarExtraContent={<a href="#">More</a>}
                onTabChange={(key: tabType) => {
                    onTabChange(key);
                }}
            >
                {contentList[activeTabKey]}
            </Card>
        </>
    )
})

export default NoticeManage