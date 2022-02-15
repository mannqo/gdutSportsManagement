import request from "./axios";

export function getEventMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/competitionManage',
        params: option,
    })
}

export function postEventMsg(option) {
    return request({
        method: 'POST',
        url: '/sports/api/competitionManage',
        data: option,
    })
}

export function deleteEventMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/competitionManage',
        data: option,
    })
}

export function putEventMsg(option) {
    return request({
        method: 'PUT',
        url: '/sports/api/competitionManage',
        data: option,
    })
}