import React, { memo } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const MAuditSider = memo(() => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                theme='dark'
                defaultOpenKeys={['event']}
                defaultSelectedKeys={['event']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="event" icon={<MailOutlined />}>
                    <NavLink to="/auditManage/event">比赛审核</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
})

export default MAuditSider