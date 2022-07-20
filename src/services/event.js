import request from "./axios";

export function getEventMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/competitionManage',
        params: option,
    })
}

export function postEventMsg(option) {
    const { formData, values } = option;
    Object.keys(values).forEach((key) => {
        !formData.get(key) && values[key] && formData.append(key, values[key]);
    })
    return request({
        method: 'POST',
        url: '/sports/api/competitionManage',
        data: formData,
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
    const { formData, values } = option;
    const fileName = ['orderBook', 'competitionPicture', 'prizesPicture', 'resultsBook', 'resultsCertificate'];

    Object.keys(values).forEach((key) => {
        !formData.get(key) && values[key] && !fileName.includes(key) && formData.append(key, values[key]);
    })
    return request({
        method: 'PUT',
        url: '/sports/api/competitionManage',
        data: formData,
    })
}

/** 
 * @description 删除文件
 * @param {*} option id type path resource name
 */
export function deleteFile(option) {
    return request({
        method: 'DELETE',
        url: '/sports/api/img/delete',
        data: option
    })
}
/* 
 * 获取个人比赛记录
 */
export function getPersonalEventMsg(option) {
    return request({
        method: 'GET',
        url: '/sports/api/sportCompetition',
        params: option,
    })
}