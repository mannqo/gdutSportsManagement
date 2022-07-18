import React, { memo } from 'react'
import MBreadcrumb from '../../../../component/MBreadcrumb';
import { coachRoutes } from '../../../../routes/breadcrumb';

const CoachManage = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;

    return (
        <>
            <MBreadcrumb pathname={pathname} route={route} breadcrumbRoutes={coachRoutes} />
        </>
    )
})


export default CoachManage