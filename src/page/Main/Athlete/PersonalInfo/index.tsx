import React, { memo, useState } from 'react'
import styled from 'styled-components';
import BaseInfo from '../../../../component/MAthleteModal/MContent/BaseInfo'

const PersonalInfo = memo(() => {
    const [number, setNumber] = useState('');

    const getNumber = (number: string) => {
        setNumber(number);
    }
    return (
        <BaseInfoContainer>
            <p className='title'>运动员个人信息</p>
            <BaseInfo getNumber={getNumber} id={44} />
            <p className="title">运动员比赛信息</p>
        </BaseInfoContainer>
    )
})

const BaseInfoContainer = styled.div`
    .title { 
        color: #000;
        font-size: 24px;
        padding: 16px 0;
        margin-bottom: 40px;
        border-bottom: 1px solid #868686;
    }
`

export default PersonalInfo