import React, { memo } from 'react'
import { Modal, PageHeader } from 'antd';
import { useStair } from './useStair';
import MInfo from '../../../../../component/MInfo';
import { ModalType } from '../../../../../type/ModalType';
import { getStairMsg } from '../../../../../services/system';
import StairModal from './StairModal';
import { stairInfo } from '../../../../../constant/system';
import { Route, RouterProps } from 'react-router-dom';

const Stair = memo((props: { route: any }) => {
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

    const routes = [
        {
            path: '/systemManage/framework/stair',
            breadcrumbName: '一级组织',
        },
        {
            path: '/systemManage/framework/secLevel',
            breadcrumbName: '二级组织',
        },
        {
            path: '/systemManage/framework/secDetails',
            breadcrumbName: '详情',
        },
    ]
    // console.log(props.route.path);
    return (
        <>
            <PageHeader
                className="site-page-header"
                breadcrumb={{ routes }}
            />
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