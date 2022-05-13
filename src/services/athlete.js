import request from "./axios";

// 增删改查
/* 运动员基本信息 */
export function getAthleteMsg(option) {
    console.log(option);
    return request({
        method: 'GET',
        url: '/sports/api/sportsBaseMsg',
        params: option
    })
}
export function postAthleteMsg(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] !== undefined && formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/sportsBaseMsg',
        data: formData
    })
}
export function deleteAthleteMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/sportsBaseMsg',
        data: option
    })
}
export function deleteMultAthleteMsg(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/sportsBaseMsg/batchDelete',
        data: option
    })
}
export function putAthleteMsg(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] && formData.append(key, option[key]);
    })
    formData.get('id');
    return request({
        method: 'PUT',
        url: '/sports/api/sportsBaseMsg',
        data: formData
    })
}

/* 运动员入学基本情况 */
export function getEntranceInfo(option) {
    return request({
        method: 'GET',
        url: '/sports/api/entranceInfo',
        params: option
    })
}
export function postEntranceInfo(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] !== undefined && formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/entranceInfo',
        data: formData
    })
}
export function deleteEntranceInfo(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/entranceInfo',
        data: option
    })
}
export function putEntranceInfo(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] && formData.append(key, option[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/entranceInfo',
        data: formData
    })
}

/* 运动员参加高考情况 */
export function getEntranceExam(option) {
    return request({
        method: 'GET',
        url: '/sports/api/entranceExam',
        params: option
    })
}
export function postEntranceExam(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] !== undefined && formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/entranceExam',
        data: formData
    })
}
export function deleteEntranceExam(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/entranceExam',
        data: option
    })
}
export function putEntranceExam(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] && formData.append(key, option[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/entranceExam',
        data: formData
    })
}

/* 运动员个人比赛情况 */
export function getSportCompetition(option) {
    return request({
        method: 'GET',
        url: '/sports/api/sportCompetition',
        params: option
    })
}
export function postSportCompetition(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] !== undefined && formData.append(key, option[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/sportCompetition',
        data: formData
    })
}
export function deleteSportCompetition(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/sportCompetition',
        data: option
    })
}
export function putSportCompetition(option) {
    const formData = new FormData();
    Object.keys(option).forEach((key) => {
        option[key] && formData.append(key, option[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/sportCompetition',
        data: formData
    })
}
