import { memo } from 'react';
import { renderRoutes } from 'react-router-config'; 
import MBreadcrumb from '../../../../../component/MBreadcrumb';
import { useSecLevel } from './useSecLevel';


const SecondLevel = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;
    const {
        breadcrumbs
    } = useSecLevel(pathname);

    return (
        <>
            <MBreadcrumb breadcrumbs={breadcrumbs} route={route} />
            {route && renderRoutes(route.children)}
        </>
    )
})

export default SecondLevel