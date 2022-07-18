import React, { memo, useEffect, useState } from 'react'
import { athleteRoutes } from '../../../../routes/breadcrumb';
import { formatBreadcrumbRoutes, Route } from '../../../../utils/format';

const useAthleteManage = (pathname: string) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Route[]>([]);

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(athleteRoutes, pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname])
    return {
        breadcrumbs,
    }
}

export default useAthleteManage