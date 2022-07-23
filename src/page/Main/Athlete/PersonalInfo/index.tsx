import { Table } from 'antd';
import React, { memo } from 'react'
import styled from 'styled-components';
import BaseInfo from '../../../../component/MAthleteModal/MContent/BaseInfo'
import usePersonalInfo from './usePersonalInfo';

const PersonalInfo = memo(() => {
    const id = Number(sessionStorage.getItem('athleteId'));
    console.log(id);

    const {
        personalEventColumns,
        data,
        total,
        onChange
    } = usePersonalInfo()

    return (
        <BaseInfoContainer>
            <p className='title'>运动员个人信息</p>
            <BaseInfo id={id} />
            <p className="title">运动员比赛信息</p>
            <Table
                columns={personalEventColumns}
                dataSource={data}
                rowKey='id'
                pagination={{ total, onChange, pageSizeOptions: ['10'] }}
            />
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