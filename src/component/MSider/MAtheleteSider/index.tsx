import React, { memo } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

const { Sider } = Layout;


const MAtheleteSider = memo(() => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['info']} 
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="info" icon={<MailOutlined />}>
                    <NavLink to="/athleteManage/info">运动员信息表</NavLink>
                </Menu.Item>
                <Menu.Item key="test">
                    <NavLink to="/athleteManage/test">测试</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
})

export default MAtheleteSider;