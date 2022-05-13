import request from "./axios";

// 增删改查(根据id)
export function getCoachMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/coach',
        params: option
    })
}

export function postCoachMsg(option) {
    return request({
        method: 'POST',
        url: '/sports/api/coach',
        data: option
    })
}

export function deleteCoachMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/coach',
        data: option
    })
}

export function deleteMultCoachMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/coach/batchDelete',
        data: option
    })
}

export function putCoachMsg(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] && formData.append(key, option[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/coach',
        data: formData
    })
}