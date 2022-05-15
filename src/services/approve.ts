import { EventValue } from "../type/eventInfo"; 
import request from "./axios";

export type ApproveRes = -1 | 0 | 1 | 2; // -1撤销 0等待审核 1通过 2不通过

/* 审核记录 */
export function getApproveMsg(option: any) {
    return request({
        method: 'GET',
        url: '/sports/api/approve',
        params: option
    })
}


export function agreeApply(option: EventValue) {
    return request({
        method: 'PUT',
        url: '/sports/api/approve/leaderFinish',
        data: option
    })
}