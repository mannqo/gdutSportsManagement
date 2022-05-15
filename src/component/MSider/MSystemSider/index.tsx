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
                defaultOpenKeys={['info', 'center']}
                defaultSelectedKeys={['info', 'stair']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key='center' title="组织架构">
                    <Menu.Item key="stair">
                        <NavLink to="/systemManage/framework/sportEvent">一级组织</NavLink>
                    </Menu.Item>
                    <Menu.Item key="secondLevel">
                        <NavLink to="/systemManage/framework/classify">二级组织</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="character">
                    <NavLink to="/systemManage/character">角色权限</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
})

export default MSystemSider