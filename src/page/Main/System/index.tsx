import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MSystemSider from '../../../component/MSider/MSystemSider';



const { Content } = Layout;
const System = memo((props: any) => {
    const { route } = props;

    return (
        <Layout>
            <MSystemSider />
            <Layout style={{ padding: '20px 24px' }}>
                <Content >
                    {route && renderRoutes(route.children)}
                </Content>
            </Layout>
        </Layout>

    );
});

export default System;