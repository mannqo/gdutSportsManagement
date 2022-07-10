import { Breadcrumb, Modal, PageHeader } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { secOrganizationRoutes } from '../../../../../routes/system';

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}

const SecondLevel = (props: { route: { children: Route[] }, location: { pathname: string } }) => {
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
        secOrganizationRoutes.forEach(item => {
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
}

export default SecondLevel