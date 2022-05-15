import request from "./axios";

/* 查询一级组织 */
export function getStairMsg(option: any) {
    return request({
        method: 'GET',
        url: '/sports/api/oneOrganization',
        params: option
    })
}
/* 查询二级组织 */
export function getSecMsg(option: any) {
    return request({
        method: 'GET',
        url: '/sports/api/secondOrganization',
        params: option
    })
}
