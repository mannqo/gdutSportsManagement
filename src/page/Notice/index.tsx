import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MSimpleSider from '../../component/MSider/MSimpleSider';

const { Content } = Layout;

const Notice = memo((props: any) => {
    const { route } = props;
    return (
        <Layout>
            <MSimpleSider children={route.children} />
            <Layout style={{ padding: '0 24px' }}>
                <Content >
                    {route && renderRoutes(route.children)}
                </Content>
            </Layout>
        </Layout>
    );
})

export default Notice