import { Modal } from 'antd'
import React, { memo } from 'react'
import MInfo from '../../../../../../component/MInfo'
import { secLevelInfo } from '../../../../../../constant/system'
import { getSecMsg } from '../../../../../../services/system'
import { ModalType } from '../../../../../../type/ModalType'
import SecModal from '../SecModal'
import { useSec } from './useSec'

const SecTable = memo((props: { oneOrg?: string }) => {
    const { oneOrg } = props;
    const {
        secColumn,
        getSecInfo,
        data,
        total,
        id,
        visible,
        hideModal,
        deleteMultiSec,
        changeData
    } = useSec(oneOrg);
    return (
        <>
            <MInfo<ModalType>
                columns={secColumn}
                getInfo={getSecInfo}
                total={total}
                TitleComponent={<SecModal id={0} />}
                deleteMulti={deleteMultiSec}
                changeData={changeData} data={data}
                searchMsg={getSecMsg}
                info={secLevelInfo}
            />
            <Modal
                title={<SecModal id={id} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>
    )
})

export default SecTable