import { Card } from 'antd';
import React, { memo, useState } from 'react'
import NoticeTable from '../Component/NoticeTable';

const tabList = [
    {
        key: 'eventNotice',
        tab: '比赛通知',
    },
    {
        key: 'approveNotice',
        tab: '审核通知',
    },
];

type tabType = 'eventNotice' | 'approveNotice';
const NoticeManage = memo(() => {
    const [activeTabKey, setActiveTabKey] = useState<tabType>('eventNotice');
    const onTabChange = (key: tabType) => {
        setActiveTabKey(key);
    };
    const contentList = {
        eventNotice: <NoticeTable type='4'></NoticeTable>,
        // approveNotice: <></>
        approveNotice: <NoticeTable type='10'></NoticeTable>,
    };

    return (
        <>
            <Card
                style={{ width: '100% ' }}
                tabList={tabList}
                activeTabKey={activeTabKey}
                tabBarExtraContent={<a href="#" > More</a>}
                onTabChange={(key: tabType) => {
                    onTabChange(key);
                }}
            >
                {contentList[activeTabKey]}
            </Card >
        </>
    )
})

export default NoticeManage