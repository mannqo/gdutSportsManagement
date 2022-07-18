import { Breadcrumb } from 'antd'
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { breadcrumbRoute } from '../../routes/breadcrumb';
import { Route } from '../../utils/format';
import useBreadcrumb from './useBreadcrumb';

const MBreadcrumb = memo((props: { pathname: string, route: { children: any }, breadcrumbRoutes: breadcrumbRoute[] }) => {
    const { pathname, route, breadcrumbRoutes } = props;
    const { breadcrumbs } = useBreadcrumb(pathname, breadcrumbRoutes);
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