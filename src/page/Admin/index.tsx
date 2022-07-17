import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from '../../routes'

const Admin = memo((props: any) => {
    const { id } = props;
    const auth = 'root';
    console.log(id);
    console.log(routes[0]);
    const newRoute = routes[0];
    // routes.forEach((value, index, arr) => {
    //     console.log(value, index, arr);
    // })
    // newRoute.forEach(() => { })


    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
})

export default Admin