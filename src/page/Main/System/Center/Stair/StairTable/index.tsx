import { Modal } from 'antd';
import React, { memo } from 'react'
import MInfo from '../../../../../../component/MInfo';
import { stairInfo } from '../../../../../../constant/system';
import { getStairMsg } from '../../../../../../services/system';
import { ModalType } from '../../../../../../type/ModalType';
import { useStair } from './useStair';
import StairModal from '../StairModal'

const StairTable = memo(() => {
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

export default StairTable