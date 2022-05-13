import { Modal } from 'antd';
import React, { memo } from 'react'
import MInfo from '../../../component/MInfo';
import MAthleteModal from '../../../component/MAthleteModal';
import { useAthlete } from './useAthlete';
import { getAthleteMsg } from '../../../services/athlete';
import { athleteBaseInfo } from '../../../constant/athlete';

const AthleteInfo = memo(() => {
    const {
        athleteColumns,
        getAthleteInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiAthlete,
        changeData
    } = useAthlete();
    return (
        <>
            <MInfo
                columns={athleteColumns}
                getInfo={getAthleteInfo}
                data={data}
                total={total}
                TitleComponent={<MAthleteModal id={0} />}
                deleteMulti={deleteMultiAthlete}
                changeData={changeData}
                searchMsg={getAthleteMsg}
                info={athleteBaseInfo}
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