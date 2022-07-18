import React, { memo } from 'react'
import MInfo from '../../../../../component/MInfo'
import { Modal } from 'antd';
import MEventModal from '../../../../../component/MEventModal';
import { useEvent } from './useEvent';
import { ModalType } from '../../../../../type/ModalType';
import { eventInfo } from '../../../../../constant/event';
import { getEventMsg } from '../../../../../services/event';

const EventInfo = memo(() => {
    const {
        eventColumn,
        getEventInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiEvent,
        changeData
    } = useEvent();

    return (
        <>
            <MInfo<ModalType>
                columns={eventColumn}
                getInfo={getEventInfo}
                total={total}
                TitleComponent={<MEventModal type='eventInfo' />}
                deleteMulti={deleteMultiEvent}
                changeData={changeData} data={data}
                searchMsg={getEventMsg}
                info={eventInfo}
                type='10'
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