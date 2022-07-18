import React, { memo, useState } from 'react'
import MInfo from '../../../../../component/MInfo'
import { Modal } from 'antd';
import MCoachModal from '../../../../../component/MCoachModal';
import { useCoach } from './useCoach';
import { ModalType } from '../../../../../type/ModalType';
import { coachInfo } from '../../../../../constant/coach';
import { getCoachMsg } from '../../../../../services/coach';

const CoachInfo = memo(() => {
    const {
        coachColumn,
        getCoachInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMutiCoach,
        changeData
    } = useCoach();
    return (
        <>
            <MInfo<ModalType>
                columns={coachColumn}
                getInfo={getCoachInfo} 
                total={total}
                TitleComponent={<MCoachModal />}
                deleteMulti={deleteMutiCoach}
                changeData={changeData} data={data}
                searchMsg={getCoachMsg}
                info={coachInfo}
                type='3'
            />

            <Modal
                title={<MCoachModal id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>

    )
})

export default CoachInfo