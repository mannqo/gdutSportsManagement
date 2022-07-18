import React, { memo } from 'react'
import { Route } from '../../../../../utils/format';
import MBreadcrumb from '../../../../../component/MBreadcrumb';
import { oneOrganizationRoutes } from '../../../../../routes/breadcrumb';


const Stair = memo((props: { route: { children: Route[] }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;

    return (
        <>
            <MBreadcrumb pathname={pathname} route={route} breadcrumbRoutes={oneOrganizationRoutes} />
        </>
    )
})

export default Stair