import React, { memo, useEffect, useState } from 'react'
import { breadcrumbRoute } from '../../routes/breadcrumb';
import { formatBreadcrumbRoutes, Route } from '../../utils/format';

const useBreadcrumb = (pathname: string, breadcrumbRoutes: breadcrumbRoute[]) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Route[]>([]);

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(breadcrumbRoutes, pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname])
    return {
        breadcrumbs,
    }
}

export default useBreadcrumb