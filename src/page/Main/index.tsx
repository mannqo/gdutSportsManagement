import React, { memo } from 'react';
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
import MHeader from '../../component/MHeader';
import { useHistory } from 'react-router-dom';
import { authTable2, judgeAuthority } from '../../utils/authority';


const Main = memo((props: any) => {
  const { route } = props;
  const history = useHistory();
  const auth = sessionStorage.getItem('auth');

  if (!auth) {
    history.push('/404');
  } else {
    judgeAuthority(route.children, authTable2[auth])
  }

  return (
    <Layout>
      <MHeader route={route} />
      {route && renderRoutes(route.children)}
    </Layout>
  )
})

export default Main;
