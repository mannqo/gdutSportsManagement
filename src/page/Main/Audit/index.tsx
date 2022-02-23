import React, { memo } from 'react'
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MAuditSider from '../../../component/MSider/MAuditSider';

const { Content } = Layout;
const Audit = memo((props: any) => {
    const { route } = props;

    return (
        <Layout>
            <MAuditSider />
            <Layout style={{ padding: '0 24px' }}>
                <Content >
                    {route && renderRoutes(route.children)}
                </Content>
            </Layout>
        </Layout>
    )
})

export default Audit