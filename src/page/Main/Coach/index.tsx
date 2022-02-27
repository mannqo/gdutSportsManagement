import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MSimpleSider from '../../../component/MSider/MSimpleSider';

const { Content } = Layout;



export default memo(function Coach(props: any) {
    const { route } = props;
    const { children } = route;
    return (
        <Layout>
            <MSimpleSider children={children} />
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content >
                    {route && renderRoutes(children)}
                </Content>
            </Layout>
        </Layout>

    );
});
