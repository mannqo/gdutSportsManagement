import request from "./axios";

export function getNoticeMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/notice',
        params: option
    })
}

export function postNoticeMsg(option) {
    const formData = new FormData();
    Object.keys(option).forEach(key => {
        formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/notice',
        data: formData
    })
}

export function deleteNoticeMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/notice',
        data: option
    })
}

export function putNoticeMsg(option) {
    const formData = new FormData();
    Object.keys(option).forEach(key => {
        formData.append(key, option[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/notice',
        data: formData
    })
}