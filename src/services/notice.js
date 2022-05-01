import request from "./axios";

export function getNoticeMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/notice',
        params: option
    })
}

export function postNoticeMsg(option) {
    return request({
        method: 'POST',
        url: '/sports/api/notice',
        data: option
    })
}

export function deleteNoticeMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/notice',
        data: option
    })
}