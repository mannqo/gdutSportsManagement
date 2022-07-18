import { memo } from 'react';
import MBreadcrumb from '../../../../../component/MBreadcrumb';
import { secOrganizationRoutes } from '../../../../../routes/breadcrumb';


const SecondLevel = memo((props: { route: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname }, route } = props;

    return (
        <>
            <MBreadcrumb pathname={pathname} route={route} breadcrumbRoutes={secOrganizationRoutes} />
        </>
    )
})

export default SecondLevel