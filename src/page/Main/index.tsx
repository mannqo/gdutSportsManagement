import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MHeader from '../../component/MHeader';


export default memo(function Main(props: any) {
  const { route } = props;

  return (
    <Layout>
      <MHeader />
      {route && renderRoutes(route.routes)}
    </Layout>
  )
});
