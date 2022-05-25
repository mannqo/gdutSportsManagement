import React, { memo, useState } from 'react'
import styled from 'styled-components';
import BaseInfo from '../../../../component/MAthleteModal/MContent/BaseInfo'

const Mqtest = memo(() => {
    const [number, setNumber] = useState('');

    const getNumber = (number: string) => {
        setNumber(number);
    }
    return (
        <BaseInfoContainer>
            <p className='title'>运动员个人信息</p>
            <BaseInfo getNumber={getNumber} id={44} />
        </BaseInfoContainer>
    )
})

const BaseInfoContainer = styled.div`
    .title { 
        color: #000;
        font-size: 30px;
        padding: 20px 0;
        margin-bottom: 40px;
        border-bottom: 1px solid #000;
    }
`

export default Mqtest