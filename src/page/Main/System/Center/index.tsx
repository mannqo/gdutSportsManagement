import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

const Center = memo((props: any) => {
    const { route } = props;

    return (
        <>
            {route && renderRoutes(route.children)}
        </>
    )
})

export default Center;