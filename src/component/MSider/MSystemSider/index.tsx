import React, { memo } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const MSystemSider = memo(() => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={['info']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="info" icon={<MailOutlined />}>
                    <NavLink to="/systemManage/config">系统配置</NavLink>
                </Menu.Item>
                <SubMenu key='center' title="组织权限中心">
                    <Menu.Item key="framework">
                        <NavLink to="/systemManage/center/framework">组织架构</NavLink>
                    </Menu.Item>
                    <Menu.Item key="account">
                        <NavLink to="/systemManage/center/account">账户中心</NavLink>
                    </Menu.Item>
                    <Menu.Item key="character">
                        <NavLink to="/systemManage/center/character">角色中心</NavLink>
                    </Menu.Item>
                    <Menu.Item key="group">
                        <NavLink to="/systemManage/center/group">群组中心</NavLink>
                    </Menu.Item>
                    <Menu.Item key="authority">
                        <NavLink to="/systemManage/center/authority">权限中心</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="test">
                    <NavLink to="/systemManage/platform">测试</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
})

export default MSystemSider