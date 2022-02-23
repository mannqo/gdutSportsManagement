import React, { memo, useState } from 'react'
import MInfo from '../../../../../component/MInfo';

const Character = memo(() => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);    // 总数据数 
    const characterColumns = [
        {
            title: '角色分类',
            dataIndex: 'category'
        },
        {
            title: '角色名称',
            dataIndex: 'name'
        },
        {
            title: '角色用户',
            dataIndex: 'user'
        },
        {
            title: '角色分类',
            dataIndex: 'creator'
        },
    ]
    const getCharacterInfo = () => {

    }
    return (
        <>
            <h1>角色权限</h1>
            <MInfo
                columns={characterColumns}
                getInfo={getCharacterInfo}
                data={data}
                total={total}
            />
        </>
    )
})

export default Character