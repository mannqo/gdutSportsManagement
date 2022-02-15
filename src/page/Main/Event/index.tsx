import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import { renderRoutes } from 'react-router-config';

const { Content, Sider } = Layout;

export default memo(function Event(props: any) {
    const { route } = props;
    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1">比赛信息</Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px' }}>
                <Content >
                    {route && renderRoutes(route.children)}
                </Content>
            </Layout>
        </Layout>
    );
});
