import React, { memo } from 'react'
import MBreadcrumb from '../../../../component/MBreadcrumb';
import { athleteRoutes } from '../../../../routes/breadcrumb';

const AthleteManage = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;

    return (
        <>
            <MBreadcrumb pathname={pathname} route={route} breadcrumbRoutes={athleteRoutes} />
        </>
    )
})

export default AthleteManage