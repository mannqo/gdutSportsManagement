import { Breadcrumb } from 'antd'
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { Route } from '../../utils/format';

const MBreadcrumb = memo((props: { breadcrumbs: Route[], route: { children: any } }) => {
    const { breadcrumbs, route } = props;
    return (
        <>
            <Breadcrumb>
                {
                    breadcrumbs.map((item, index) => (
                        <Breadcrumb.Item key={index}>
                            <Link to={item.path}>{item.breadcrumbName}</Link>
                        </Breadcrumb.Item>
                    ))
                }
            </Breadcrumb>
            {route && renderRoutes(route.children)}
        </>

    )
})

export default MBreadcrumb