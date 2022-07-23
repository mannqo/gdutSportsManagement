import { baseURL } from "../config";
import request from "./axios";

/* 上传excel文件 */
/**
 * 
 * @param {file} excelFile
 * @param {int}  type 4比赛 3教练 10运动员  
 * @returns 
 */
export const uploadExcel = {
    name: 'excelFile',
    url: baseURL + '/sports/api/file/excelFileUpload',
    token: sessionStorage.getItem('token') || ''
}
/* 导出excel文件 */
/**
 *  
 * @param {int} type 4比赛 3教练 10运动员
 * @returns 
 */
export function exportExcel(option) {
    return request({
        method: 'GET',
        url: '/sports/api/file/exportByType',
        params: option
    })
}

/* 下载对应的导入模板 */
/* 导出excel文件 */
/**
 *  
 * @param {int}  type 4比赛 3教练 10运动  员
 * @returns 
 */
export function importTemplate(type) {
    const url = baseURL + '/sports/api/file/download?type=' + type
    return url;
}