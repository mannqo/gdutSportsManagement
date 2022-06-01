import React, { memo } from 'react'
import { Modal } from 'antd';
import { useStair } from './useStair';
import MInfo from '../../../../../component/MInfo';
import { ModalType } from '../../../../../type/ModalType';
import { getStairMsg } from '../../../../../services/system';
import StairModal from './StairModal';
import { stairInfo } from '../../../../../constant/system';

const Stair = memo(() => {
    const {
        stairColumn,
        getStairInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiStair,
        changeData
    } = useStair();

    return (
        <>
            <MInfo<ModalType>
                columns={stairColumn}
                getInfo={getStairInfo}
                total={total}
                TitleComponent={<StairModal id={0} />}
                deleteMulti={deleteMultiStair}
                changeData={changeData} data={data}
                searchMsg={getStairMsg}
                info={stairInfo}
            />
            <Modal
                title={<StairModal id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>
    )
})

export default Stair