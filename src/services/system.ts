import request from "./axios";

/* 一级组织和二级组织的增删改查 */
export function getStairMsg(option: any) {
    return request({
        method: 'GET',
        url: '/sports/api/oneOrganization',
        params: option
    })
}
export function getSecMsg(option: any) {
    return request({
        method: 'GET',
        url: '/sports/api/secondOrganization',
        params: option
    })
}

export function postStairMsg(option: any) {
    const formData = new FormData();
    Object.keys(option).forEach(key => {
        formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/oneOrganization',
        data: formData
    })
}

export function postSecMsg(option: any) {
    const formData = new FormData();
    Object.keys(option).forEach(key => {
        formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/secondOrganization',
        data: formData
    })
}

export function putStairMsg(option: any) {
    return request({
        method: 'PUT',
        url: '/sports/api/oneOrganization',
        data: option
    })
}

export function putSecMsg(option: any) {
    return request({
        method: 'PUT',
        url: '/sports/api/secondOrganization',
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

export function deleteSecMsg(option: any) {
    return request({
        method: 'DELETE',
        url: '/sports/api/secondOrganization',
        data: option
    })
} 