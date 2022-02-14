import request from "./axios";

// 增删改查
export function getAthleteMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/sportsBaseMsg',
        params: option
    })
}

export function postAthleteMsg(option) {
    return request({
        method: 'POST',
        url: '/sports/api/sportsBaseMsg',
        data: option
    })
}

export function deleteAthleteMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/sportsBaseMsg',
        data: option
    })
}

export function putAthleteInfo(option) {
    return request({
        method: 'PUT',
        url: '/sports/api/sportsBaseMsg',
        data: option
    })
}

