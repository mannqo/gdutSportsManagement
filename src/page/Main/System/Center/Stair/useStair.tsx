import { useEffect, useState } from "react";
import { oneOrganizationRoutes } from "../../../../../routes/breadcrumb";
import { formatBreadcrumbRoutes, Route } from "../../../../../utils/format";


export const useStair = (pathname: string) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Route>>([]);

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(oneOrganizationRoutes, pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname]);

    return {
        breadcrumbs
    }
}