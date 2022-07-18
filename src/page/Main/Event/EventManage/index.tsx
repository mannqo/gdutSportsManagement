
import React, { memo } from 'react'
import MBreadcrumb from '../../../../component/MBreadcrumb';
import { eventRoutes } from '../../../../routes/breadcrumb';

const EventManage = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;
    return (
        <MBreadcrumb pathname={pathname} route={route} breadcrumbRoutes={eventRoutes} />
    )
})

export default EventManage