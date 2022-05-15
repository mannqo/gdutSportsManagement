import React, { memo } from 'react'
import { Menu } from 'antd';
import { useStair } from './useStair';
import MInfo from '../../../../../component/MInfo';

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
    } = useStair();

    return (
        <MInfo
            columns={stairColumn}
            getInfo={getStairInfo}
            data={data}
            total={total} />
    )
})

export default Stair