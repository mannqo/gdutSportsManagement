import React, { memo, useEffect, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes, { Route } from '../../routes'
import { getAuthority } from '../../services/admin'

const Admin = memo((props: any) => {
    const { id } = props;
    const [auth, setAuth] = useState('root');

    function judgeAuthority(routesArr: Route[]) {
        const arr: Route[] = []
        routesArr.forEach((item) => {
            if (!item.auth && item.children) {
                item.children = judgeAuthority(item.children);
                arr.push(item);
            }
            item.auth?.includes(auth) && arr.push(item);
        })
        return arr;
    }

    judgeAuthority(routes);

    const asyncFn = async (number: string) => {
        const res = await getAuthority(number);
        const { other } = res;
        localStorage.setItem('token', other);
    }
    useEffect(() => {
        asyncFn('666666')
    }, [])

    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
})

export default Admin