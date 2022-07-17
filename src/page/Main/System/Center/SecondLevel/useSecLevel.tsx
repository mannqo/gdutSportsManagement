import { useEffect, useState } from "react";
import { secOrganizationRoutes } from "../../../../../routes/system";

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}

export const useSecLevel = (children: any, pathname: string) => {
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Route>>([]);

    useEffect(() => {
        const breadcrumbs = formatBreadcrumbRoutes(pathname);
        setBreadcrumbs(breadcrumbs);
    }, [pathname]);

    function formatBreadcrumbRoutes(pathname: string) {
        let result: Array<Route> = [];
        secOrganizationRoutes.forEach(item => {
            pathname.includes(item.path) && result.push(item);
        })
        return result;
    }

    return {
        breadcrumbs
    }
}