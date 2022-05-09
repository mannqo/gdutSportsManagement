import React, { memo, useEffect, useState } from 'react'
import BaseInfo from './BaseInfo'
import CollegeExam from './EntranceExam';
import Entrance from './EntranceInfo';
import PersonalMatch from './PersonalMatch';
import { Tabs } from 'antd';
import { getAthleteMsg } from '../../../services/athlete';

const { TabPane } = Tabs;

const MContent = memo((props: { id: number }) => {
    const { id } = props;
    const [number, setNumber] = useState('');

    const getNumber = (number: string) => {
        setNumber(number);
    }

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getAthleteMsg({ id });
            const record = res.data.records[0];
            setNumber(record.number);
        }
        id && getInitialValues();
    }, [id])

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="基本信息" key="baseInfo">
                <BaseInfo getNumber={getNumber} id={id} />
            </TabPane>
            <TabPane tab="入学基本情况" key="entrance">
                <Entrance number={number} />
            </TabPane>
            <TabPane tab="参加高考情况" key="collegeExam">
                <CollegeExam number={number} id={id} />
            </TabPane>
            <TabPane tab="个人比赛信息" key="personalMatch">
                <PersonalMatch number={number} id={id} />
            </TabPane>
        </Tabs>
    )
})


export default MContent