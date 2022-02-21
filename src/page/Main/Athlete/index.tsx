import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MAthleteSider from '../../../component/MSider/MAtheleteSider';

const { Content } = Layout;

export default memo(function Athlete(props: any) {
    const { route } = props;

    return (
        <Layout>
            <MAthleteSider />
            <Layout style={{ padding: '0 24px' }}>
                <Content >
                    {route && renderRoutes(route.children)}
                </Content>
            </Layout>
        </Layout>

    );
});
