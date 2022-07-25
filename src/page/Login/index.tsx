import React, { memo, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import routes from '../../routes';
import { getAuthority } from '../../services/admin';
import { AuthorityRes, authTable, judgeAuthority } from '../../utils/authority';


const Login = memo(() => {
    const { search } = useLocation();
    const history = useHistory();
    const number = sessionStorage.getItem('number') || search.split('=')[1];

    const checkAuthority = async (number: string) => {
        const res: AuthorityRes = await getAuthority(number);
        const { other, data } = res;
        if (!data) {
            history.push('/404');
            return;
        }
        const { id, permission } = data;
        /* 根据权限改变路由 */
        judgeAuthority(routes, permission[0]);
        sessionStorage.setItem('token', other);
        sessionStorage.setItem('number', number);
        sessionStorage.setItem('athleteId', id);
        sessionStorage.setItem('auth', authTable[permission[0]]);
        history.push({
            pathname: '/manage/athleteManage',
            state: number
        });
    }
    useEffect(() => {
        checkAuthority(number);
    }, [])

    return (
        <></>
    )
})

export default Login