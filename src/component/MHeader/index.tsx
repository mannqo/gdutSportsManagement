import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default memo(function MHeader() {
    const history = useHistory();
    const { pathname } = history.location;

    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
                <Menu.Item key="/athleteManage/info" onClick={() => history.push('/athleteManage/info')}>运动员管理</Menu.Item>
                <Menu.Item key="/eventManage/info" onClick={() => history.push('/eventManage/info')}>比赛管理</Menu.Item>
                <Menu.Item key="/coachInfo/info" onClick={() => history.push('/coachInfo/info')}>教练信息</Menu.Item>
                {/* <Menu.Item key="/checkInfo" onClick={() => history.push('/checkInfo')}>考勤管理</Menu.Item> */}
                <Menu.Item key="/systemManage/framework/sportEvent" onClick={() => history.push('/systemManage/framework/sportEvent')}>系统管理</Menu.Item>
                <Menu.Item key="/approveManage/event" onClick={() => history.push('/approveManage/event')}>审核管理</Menu.Item>
                <Menu.Item key="/notice/event" onClick={() => history.push('/notice/event')}>通知</Menu.Item>
            </Menu>
        </Header>
    )
});
