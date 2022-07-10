import React, { memo, useEffect, useState } from 'react'
import { Breadcrumb, PageHeader } from 'antd';
import { oneOrganizationRoutes } from '../../../../../routes/system';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}

const Stair = memo((props: { route: { children: Route[] }, location: { pathname: string } }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Route>>([]);
    const { location: { pathname } } = props;
    const { route } = props;
    const { children } = route;

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname]);

    function formatBreadcrumbRoutes(pathname: string) {
        let result: Array<Route> = [];
        oneOrganizationRoutes.forEach(item => {
            pathname.includes(item.path) && result.push(item);
        })
        return result;
    }

    return (
        <>
            <Breadcrumb>
                {
                    breadcrumbs.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={index}>
                                <Link to={item.path}>{item.breadcrumbName}</Link>
                            </Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
            {route && renderRoutes(children)}
        </>
    )
})

export default Stair