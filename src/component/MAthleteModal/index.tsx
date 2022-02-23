import React, { memo, useState } from 'react';
import { Menu } from 'antd';
import MContent from './MContent';

const MAthleteModal = memo((props: any) => {
    const [current, setCurrent] = useState('baseInfo');
    const { id } = props; 


    const handleClick = (e: any) => {
        setCurrent(e.key);
    }

    return (
        <>
            <MContent current={current} id={id} />
        </>

    )
})

export default MAthleteModal;