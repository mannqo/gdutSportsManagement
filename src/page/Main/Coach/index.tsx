import React, { memo, useState } from 'react'
import MInfo from '../../../component/MInfo'
import { deleteCoachMsg, getCoachMsg } from '../../../services/coach'
import { ExclamationCircleOutlined, SettingOutlined, DeleteOutlined } from "@ant-design/icons";
import { Modal } from 'antd';
import MCoachModal from '../../../component/MCoachModal';
import { useCoach } from './useCoach';

const CoachInfo = memo(() => {
    const {
        coachColumn,
        getCoachInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMutiCoach
    } = useCoach();
    return (
        <>
            <MInfo
                deleteMulti={deleteMutiCoach}
                columns={coachColumn}
                getInfo={getCoachInfo}
                data={data}
                total={total}
                TitleComponent={<MCoachModal />}
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