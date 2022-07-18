// 系统管理的一级组织
export const oneOrganizationRoutes = [
    {
        path: "/systemManage/framework/stair",
        breadcrumbName: '一级组织',
    },
    {
        path: "/systemManage/framework/stair/secLevel",
        breadcrumbName: '二级组织',
    },
    {
        path: "/systemManage/framework/stair/secLevel/detail",
        breadcrumbName: '对应的运动员信息',
    },
]
// 系统管理的二级组织
export const secOrganizationRoutes = [
    {
        path: "/systemManage/framework/secLevel",
        breadcrumbName: '二级组织',
    },
    {
        path: "/systemManage/framework/secLevel/detail",
        breadcrumbName: '对应的运动员信息',
    },
]
// 运动员管理
export const athleteRoutes = [
    {
        path: '/athleteManage/info',
        breadcrumbName: '运动员信息主页'
    },
    {
        path: '/athleteManage/info/uploadExcel',
        breadcrumbName: '导入运动员信息'
    }
]