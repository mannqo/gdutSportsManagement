import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import MBreadcrumb from '../../../../component/MBreadcrumb';
import useAthleteManage from './useAthleteManage';

const AthleteManage = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;
    const { breadcrumbs } = useAthleteManage(pathname);
    console.log(route);

    return (
        <>
            <MBreadcrumb breadcrumbs={breadcrumbs} route={route} />
            {/* {route && renderRoutes(route.children)} */}
        </>
    )
})

export default AthleteManage