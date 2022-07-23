import React, { memo } from 'react'
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MSimpleSider from './MSimpleSider';

const { Content } = Layout;

const MNormalSider = memo((props: any) => {
    const { route } = props;
    const { children } = route;

    return (
        <Layout>
            <MSimpleSider children={children} />
            <Layout style={{ padding: '20px 24px' }}>
                <Content >
                    {route && renderRoutes(children)}
                </Content>
            </Layout>
        </Layout>
    )
})

export default MNormalSider