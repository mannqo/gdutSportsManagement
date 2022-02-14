import React, { memo } from 'react'
import BaseInfo from './BaseInfo'
import CollegeExam from './CollegeExam';
import Entrance from './Entrance';
import PersonalMatch from './PersonalMatch';

interface Props {
    current: string,
}

const MContent = memo((props: Props) => {
    const { current } = props;

    const content = () => {
        switch (current) {
            case 'baseInfo': return <BaseInfo />
            case 'entrance': return <Entrance />
            case 'collegeExam': return <CollegeExam />
            case 'personalMatch': return <PersonalMatch />
        }
    }

    return (
        <div style={{ paddingTop: '30px' }}>
            {content()}
        </div>
    )
})


export default MContent