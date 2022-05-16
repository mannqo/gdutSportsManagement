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

export function postStairMsg(option: any) {
    return request({
        method: 'POST',
        url: '/sports/api/oneOrganization',
        data: option
    })
}

export function putStairMsg(option: any) {
    return request({
        method: 'PUT',
        url: '/sports/api/oneOrganization',
        data: option
    })
}


export function deleteStairMsg(option: any) {
    return request({
        method: 'DELETE',
        url: '/sports/api/oneOrganization',
        data: option
    })
}

