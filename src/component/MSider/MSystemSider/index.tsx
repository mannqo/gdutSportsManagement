import React, { memo, useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const MSystemSider = memo(() => {
    const { pathname } = useLocation(); 

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                theme='dark'
                defaultOpenKeys={['info', 'center']}
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key='center' title="组织架构">
                    <Menu.Item key="/manage/systemManage/framework/stair">
                        <NavLink to="/manage/systemManage/framework/stair">一级组织</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/manage/systemManage/framework/secLevel">
                        <NavLink to="/manage/systemManage/framework/secLevel">二级组织</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/manage/systemManage/character">
                    <NavLink to="/manage/systemManage/character">角色权限</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
})

export default MSystemSider