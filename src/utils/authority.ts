import { RouteType } from "../routes";

type Identity = '管理员' | '在校运动员';

interface AuthorityData {
    id: string,
    permission: Identity[],
}
export interface AuthorityRes {
    other: string,
    data: AuthorityData
}

interface AuthTable {
    [key: string]: string,
}
export const authTable: AuthTable = {
    '管理员': 'dasafnsdjfhsdfu',
    '在校运动员': 'dsfsdfjehrujeks',
}
export const authTable2: AuthTable = {
    'dasafnsdjfhsdfu': '管理员',
    'dsfsdfjehrujeks': '在校运动员',
}

export function judgeAuthority(routesArr: RouteType[], auth: string) {
    const arr: RouteType[] = []
    routesArr.forEach((item) => {
        if (!item.auth && item.children) {
            item.children = judgeAuthority(item.children, auth);
            arr.push(item);
        }
        item.auth?.includes(auth) && arr.push(item);
    })
    return arr;
}



