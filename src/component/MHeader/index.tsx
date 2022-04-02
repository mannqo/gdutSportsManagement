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
                <Menu.Item key="/athleteManage/info" onClick={() => history.push('/athleteManage')}>运动员管理</Menu.Item>
                <Menu.Item key="/eventManage/info" onClick={() => history.push('/eventManage')}>比赛管理</Menu.Item>
                <Menu.Item key="/coachInfo/info" onClick={() => history.push('/coachInfo')}>教练信息</Menu.Item>
                {/* <Menu.Item key="/checkInfo" onClick={() => history.push('/checkInfo')}>考勤管理</Menu.Item> */}
                <Menu.Item key="/systemManage/config" onClick={() => history.push('/systemManage')}>系统管理</Menu.Item>
                <Menu.Item key="/auditManage/event" onClick={() => history.push('/auditManage')}>审核管理</Menu.Item>
                <Menu.Item key="/notice/event" onClick={() => history.push('/notice')}>通知</Menu.Item>
            </Menu>
        </Header>
    )
});
