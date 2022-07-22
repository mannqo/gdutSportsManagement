import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MHeader from '../../component/MHeader';


const Main = memo((props: any) => {
  const { route } = props; 

  return (
    <Layout>
      <MHeader route={route} />
      {route && renderRoutes(route.children)}
    </Layout>
  )
})

export default Main;
