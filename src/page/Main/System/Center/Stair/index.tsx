import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Route } from '../../../../../utils/format';
import { useStair } from './useStair';
import MBreadcrumb from '../../../../../component/MBreadcrumb';


const Stair = memo((props: { route: { children: Route[] }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;
    const {
        breadcrumbs
    } = useStair(pathname);

    return (
        <>
            <MBreadcrumb breadcrumbs={breadcrumbs} route={route} />
            {route && renderRoutes(route.children)}
        </>
    )
})

export default Stair