import React, { Component, memo, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Sider } = Layout;

interface ItemValue {
    path: string,
    exact: boolean,
    render?: Function,
    component?: Component,
    icon: any,
    content?: string
}

const MSimpleSider = memo((props: any) => {
    const { children } = props;
    const { pathname } = useLocation();

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    children.map((value: ItemValue, index: number) => {
                        if (index) {
                            return (
                                <Menu.Item key={value.path} icon={<value.icon />}>
                                    <NavLink to={value.path}>{value.content}</NavLink>
                                </Menu.Item>
                            )
                        }
                    })
                }

            </Menu>
        </Sider>
    )
})

export default MSimpleSider