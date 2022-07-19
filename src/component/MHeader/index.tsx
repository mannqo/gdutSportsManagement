import React, { memo, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Route } from '../../routes';

const { Header } = Layout;

export default memo(function MHeader(props: { route: { children: Route[] } }) {
    const { route: { children } } = props;
    const history = useHistory();
    const { pathname } = useLocation();
    const prefix = pathname.split('/');

    return (
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[`/${prefix[1]}`]} >
                {
                    children.map(item => {
                        if (item.path !== '/') return (
                            <Menu.Item
                                key={item.path}
                                onClick={() => history.push(item.path)}>
                                {item.content}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Header >
    )
});
