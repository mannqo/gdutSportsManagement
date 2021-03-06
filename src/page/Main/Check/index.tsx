import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

const Check = memo(() => {
    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    theme='dark'
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
                    考勤管理
                </Content>
            </Layout>
        </Layout>

    );
});
export default Check;
