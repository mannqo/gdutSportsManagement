import { useEffect, useState } from "react";
import { secOrganizationRoutes } from "../../../../../routes/breadcrumb";
import { formatBreadcrumbRoutes, Route } from "../../../../../utils/format";


export const useSecLevel = (pathname: string) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Route>>([]);

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(secOrganizationRoutes, pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname]);

    return {
        breadcrumbs
    }
}