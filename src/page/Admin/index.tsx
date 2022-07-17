import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes, { Route } from '../../routes'

const Admin = memo((props: any) => {
    const { id } = props;
    const auth = 'athlete';

    function judgeAuthority(routesArr: Route[]) {
        const arr: Route[] = []
        routesArr.forEach((item) => {
            if (!item.auth && item.children) {
                item.children = judgeAuthority(item.children);
                arr.push(item);
            }
            if (item.auth?.includes(auth)) {
                arr.push(item);
            }
        })
        console.log(arr);
        return arr;
    }

    judgeAuthority(routes);
    console.log(routes);


    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
})

export default Admin