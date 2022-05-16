import React, { memo } from 'react'
import { Menu, Modal } from 'antd';
import { useStair } from './useStair';
import MInfo from '../../../../../component/MInfo';
import { ModalType } from '../../../../../type/ModalType';
import { getStairMsg } from '../../../../../services/system';
import MyModal from './StairModal';

const { SubMenu } = Menu;

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
                deleteMulti={deleteMultiStair}
                changeData={changeData} data={data}
                searchMsg={getStairMsg}
            />
            <Modal
                title={<MyModal id={id} />}
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