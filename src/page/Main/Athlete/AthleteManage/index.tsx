import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import MBreadcrumb from '../../../../component/MBreadcrumb';
import useAthleteManage from './useAthleteManage';

const AthleteManage = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;
    const { breadcrumbs } = useAthleteManage(pathname);

    return (
        <>
            <MBreadcrumb breadcrumbs={breadcrumbs} route={route} />
        </>
    )
})

export default AthleteManage