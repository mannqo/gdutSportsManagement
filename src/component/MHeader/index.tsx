import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Route } from '../../routes';

const { Header } = Layout;

export default memo(function MHeader(props: { route: { children: Route[] } }) {
    const history = useHistory();
    const { pathname } = history.location;
    const { route: { children } } = props;

    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>
                {
                    children.map(item => {
                        if (item.path !== '/') return (
                            <Menu.Item key={item.path} onClick={() => history.push(item.path)}>{item.content}</Menu.Item>
                        )
                    })
                }
            </Menu>
        </Header>
    )
});
