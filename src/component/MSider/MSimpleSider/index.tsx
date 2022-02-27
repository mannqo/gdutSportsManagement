import React, { Component, memo } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

interface ItemValue {
    path: string,
    exact: boolean,
    render?: Function,
    component?: Component,
    icon: any,
    key?: string,
    content?: string
}

const MSimpleSider = memo((props: any) => {
    const { children } = props;

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                theme='dark'
                // defaultOpenKeys={[route[1].key]}
                defaultSelectedKeys={[children[1].key]}
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    children.map((value: ItemValue, index: number) => {
                        if (index) {
                            return (
                                <Menu.Item key={value.key} icon={<value.icon />}>
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