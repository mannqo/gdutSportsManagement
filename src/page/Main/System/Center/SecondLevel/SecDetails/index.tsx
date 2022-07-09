import { PageHeader } from 'antd';
import React, { memo } from 'react'

const SecDetails = memo((props: { id: number }) => {
    // const routes = [
    //     {
    //         path: '/systemManage/framework/stair',
    //         breadcrumbName: '一级组织',
    //     },
    //     {
    //         path: '/',
    //         breadcrumbName: '二级组织',
    //     },
    //     {
    //         path: '/systemManage/framework/secDetails',
    //         breadcrumbName: '详情',
    //     },
    // ]
    const { id } = props;

    return (
        <>
            {/* <PageHeader
                className="site-page-header"
                breadcrumb={{ routes }}
            /> */}
            <div>SecDetails</div>
        </>
    )
})

export default SecDetails