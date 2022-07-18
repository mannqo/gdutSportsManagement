import request from "./axios";

export function getAuthority(number: string) {
    console.log(number);

    return request({
        method: 'GET',
        url: '/sports/api/permission/getByNumber',
        params: { number }
    })
}
