import request from "./axios";

/* 审核记录 */
export function getApproveMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/approve',
        params: option
    })
}