import { Modal } from 'antd';
import React, { memo } from 'react'
import MInfo from '../../../component/MInfo';
import MAthleteModal from '../../../component/MAthleteModal';
import { useAthlete } from './useAthlete';

const AthleteInfo = memo(() => {
    const {
        athleteColumns,
        getAthleteInfo,
        data,
        total,
        id,
        visible,
        hideModal
    } = useAthlete();
    return (
        <>
            <MInfo
                columns={athleteColumns}
                getInfo={getAthleteInfo}
                data={data}
                total={total}
                TitleComponent={<MAthleteModal id={0} />}
            />
            <Modal
                title={<MAthleteModal id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>

    )
})

export default AthleteInfo;