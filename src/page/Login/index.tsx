import React, { memo, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import routes from '../../routes';
import { getAuthority } from '../../services/admin';
import { judgeAuthority } from '../../utils/authority';

const Login = memo(() => {
    const { search } = useLocation();
    const history = useHistory();
    const number = search.split('=')[1];
    localStorage.setItem('number', number);


    const checkAuthority = async (number: string) => {
        const res = await getAuthority(number);
        const { other, data } = res;
        console.log(res);

        if (!data) {
            history.push('/404');
            return;
        }
        const { id, permission } = data;
        /* 根据权限改变路由 */
        judgeAuthority(routes, permission[0]);
        localStorage.setItem('token', other);
        localStorage.setItem('athleteId', id);
        history.push('/athleteManage');
    }
    useEffect(() => {
        checkAuthority(number);
    }, [])

    return (
        <></>
    )
})

export default Login