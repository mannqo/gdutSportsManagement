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
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="baseInfo">
                    基本信息
                </Menu.Item>
                <Menu.Item key="entrance">
                    入学基本情况
                </Menu.Item>
                <Menu.Item key="collegeExam">
                    参加高考情况
                </Menu.Item>
                <Menu.Item key="personalMatch">
                    个人比赛信息
                </Menu.Item>
            </Menu>
            <MContent current={current} id={id} />
        </>

    )
})

export default MAthleteModal;