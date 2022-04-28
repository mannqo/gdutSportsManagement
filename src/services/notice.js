import request from "./axios";

export function getNoticeMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/notice',
        params: option
    })
}