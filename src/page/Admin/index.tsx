import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from '../../routes'

const Admin = memo((props: any) => {
    const { id } = props;
    console.log(routes);
    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
})

export default Admin