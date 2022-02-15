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

export function putCoachMsg(option) {
    return request({
        method: 'PUT',
        url: '/sports/api/coach',
        data: option
    })
}