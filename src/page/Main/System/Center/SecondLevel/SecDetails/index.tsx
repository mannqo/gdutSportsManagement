import { Modal, PageHeader, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { memo } from 'react'
import MAthleteModal from '../../../../../../component/MAthleteModal';
import MInfo from '../../../../../../component/MInfo';
import { athleteBaseInfo } from '../../../../../../constant/athlete';
import { getAthleteMsg } from '../../../../../../services/athlete';
import { ModalType } from '../../../../../../type/ModalType';
import useDetail from './useDetail';

const SecDetails = memo((props: any) => {
    console.log(props);

    const { state } = props.location;

    const {
        athleteColumns,
        getAthletes,
        data,
        total,
        athleteId,
        visible,
        hideModal,
        deleteMultiAthlete,
        changeData
    } = useDetail(state);

    return (
        <>
            <MInfo<ModalType>
                columns={athleteColumns}
                getInfo={getAthletes}
                total={total}
                TitleComponent={<MAthleteModal id={0} />}
                deleteMulti={deleteMultiAthlete}
                changeData={changeData} data={data}
                searchMsg={() => getAthleteMsg()}
                info={athleteBaseInfo}
            />
            <Modal
                title={<MAthleteModal id={athleteId} />}
                visible={visible}
                bodyStyle={{ display: 'none' }}
                onOk={hideModal}
                onCancel={hideModal}
                width={1000}
            />
        </>
    )
})

export default SecDetails