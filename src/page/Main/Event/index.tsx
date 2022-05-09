import React, { memo, useState } from 'react'
import MInfo from '../../../component/MInfo'
import { Modal } from 'antd';
import MEventModal from '../../../component/MEventModal';
import { useEvent } from './useEvent';

const EventInfo = memo(() => {
    const {
        eventColumn,
        getEventInfo,
        data,
        total,
        id,
        visible,
        hideModal
    } = useEvent();

    return (
        <>
            <MInfo
                columns={eventColumn}
                getInfo={getEventInfo}
                data={data}
                total={total}
                TitleComponent={<MEventModal type='eventInfo' />}
            />
            <Modal
                title={<MEventModal type='eventInfo' id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>

    )
})

export default EventInfo