import React, { memo } from 'react'
import MInfo from '../../../../../component/MInfo';
import { useSec } from './useSec';

const SecondLevel = memo(() => {
    const {
        secColumn,
        getSecInfo,
        data,
        total,
    } = useSec();
    return (
        <>
            <MInfo
                columns={secColumn}
                getInfo={getSecInfo}
                data={data}
                total={total} />
        </>
    )
})

export default SecondLevel