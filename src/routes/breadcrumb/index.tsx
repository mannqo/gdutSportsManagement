export interface breadcrumbRoute {
    path: string,
    breadcrumbName: string,
}

// 系统管理的一级组织
export const oneOrganizationRoutes: breadcrumbRoute[] = [
    {
        path: "/manage/systemManage/framework/stair",
        breadcrumbName: '一级组织',
    },
    {
        path: "/manage/systemManage/framework/stair/secLevel",
        breadcrumbName: '二级组织',
    },
    {
        path: "/manage/systemManage/framework/stair/secLevel/detail",
        breadcrumbName: '对应的运动员信息',
    },
]
// 系统管理的二级组织
export const secOrganizationRoutes: breadcrumbRoute[] = [
    {
        path: "/manage/systemManage/framework/secLevel",
        breadcrumbName: '二级组织',
    },
    {
        path: "/manage/systemManage/framework/secLevel/detail",
        breadcrumbName: '对应的运动员信息',
    },
]
// 运动员管理
export const athleteRoutes: breadcrumbRoute[] = [
    {
        path: '/manage/athleteManage/info',
        breadcrumbName: '运动员信息主页'
    },
    {
        path: '/manage/athleteManage/info/uploadExcel',
        breadcrumbName: '导入运动员信息'
    }
]

export const eventRoutes: breadcrumbRoute[] = [
    {
        path: '/manage/eventManage/info',
        breadcrumbName: '比赛信息主页'
    },
    {
        path: '/manage/eventManage/info/uploadExcel',
        breadcrumbName: '导入比赛信息'
    }
]

export const coachRoutes: breadcrumbRoute[] = [
    {
        path: '/manage/coachInfo/info',
        breadcrumbName: '教练信息主页'
    },
    {
        path: '/manage/coachInfo/info/uploadExcel',
        breadcrumbName: '导入教练信息'
    }
]