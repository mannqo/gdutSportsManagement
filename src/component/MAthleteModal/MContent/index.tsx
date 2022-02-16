import React, { memo, useEffect, useState } from 'react'
import BaseInfo from './BaseInfo'
import CollegeExam from './EntranceExam';
import Entrance from './EntranceInfo';
import PersonalMatch from './PersonalMatch';

interface Props {
    current: string,
    id: string
}

const MContent = memo((props: Props) => {
    const { current, id } = props;
    const initialStatus = new Map([
        ['baseInfo', 'block'],
        ['entrance', 'none'],
        ['collegeExam', 'none'],
        ['personalMatch', 'none']
    ])
    const [status, setStatus] = useState(initialStatus);
    const [number, setNumber] = useState('');
    const getNumber = (number: string) => {
        setNumber(number);
    }

    useEffect(() => {
        initialStatus.forEach((value, key) => {
            key === current ?
                initialStatus.set(current, 'block') :
                initialStatus.set(key, 'none');
        })
        setStatus(initialStatus)
    }, [current])

    return (
        <div style={{ paddingTop: '30px' }}>
            <div style={{ display: status.get('baseInfo') }}><BaseInfo getNumber={getNumber} id={id} /></div>
            <div style={{ display: status.get('entrance') }}><Entrance number={number} id={id} /></div>
            <div style={{ display: status.get('collegeExam') }}><CollegeExam number={number} id={id} /></div>
            <div style={{ display: status.get('personalMatch') }}><PersonalMatch number={number} id={id} /></div>
        </div>
    )
})


export default MContent