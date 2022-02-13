import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

export default memo(function index() {
    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1">考勤信息管理</Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content >
                    C111
                </Content>
            </Layout>
        </Layout>

    );
});
