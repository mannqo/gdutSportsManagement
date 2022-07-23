import { Route } from "../routes";

export function judgeAuthority(routesArr: Route[], auth: string) { 
    const arr: Route[] = []
    routesArr.forEach((item) => {
        if (!item.auth && item.children) {
            item.children = judgeAuthority(item.children, auth);
            arr.push(item);
        }
        item.auth?.includes(auth) && arr.push(item);
    })
    return arr;
}