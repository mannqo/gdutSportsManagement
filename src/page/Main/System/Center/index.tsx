import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

const Center = memo((props: any) => {
    const { route } = props;
    console.log('center', route);

    return (
        <CenterWrapper>
            {route && renderRoutes(route.children)}
        </CenterWrapper>
    )
})

const CenterWrapper = styled.div`
    h1 {
        font-size: 28px;
        line-height: 50px;
        color: #1890ff;
        font-weight: 400;
        border-bottom: 2px solid skyblue;
    }
`

export default Center;