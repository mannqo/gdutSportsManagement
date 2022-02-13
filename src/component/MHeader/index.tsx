import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default memo(function MHeader() {
    const history = useHistory();
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={() => history.push('/athleteManage')}>运动员管理</Menu.Item>
                <Menu.Item key="2" onClick={() => history.push('/eventManage')}>比赛管理</Menu.Item>
                <Menu.Item key="3" onClick={() => history.push('/coachInfo')}>教练信息</Menu.Item>
                <Menu.Item key="4" onClick={() => history.push('/checkInfo')}>考勤管理</Menu.Item>
            </Menu>
        </Header>
    )
});
