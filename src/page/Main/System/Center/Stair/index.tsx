import React, { memo } from 'react'
import { PageHeader } from 'antd';
import StairTable from './StairTable';
import { organizationRoutes } from '../../../../../routes/system';

const Stair = memo((props: { route: { path: string } }) => {
    const { route: { path } } = props;
    const targetPath = path.split('/')[path.split('/').length - 1];

    return (
        <>
            <PageHeader
                className="site-page-header"
                breadcrumb={{
                    routes: organizationRoutes, itemRender(route, params, routes, paths) {
                        const index = routes.findIndex(item => item.path === targetPath);
                        routes = routes.slice(0, index + 1);
                        const last = routes.indexOf(route) === routes.length - 1;
                        return last && (
                            <span>{route.breadcrumbName}</span>
                        )
                    },
                }}
            />
            <StairTable></StairTable>
        </>
    )
})

export default Stair