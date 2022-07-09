import { Modal, PageHeader, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { memo } from 'react'
import MAthleteModal from '../../../../../../component/MAthleteModal';
import MInfo from '../../../../../../component/MInfo';
import { athleteBaseInfo } from '../../../../../../constant/athlete';
import { getAthleteMsg } from '../../../../../../services/athlete';
import { ModalType } from '../../../../../../type/ModalType';
import useDetail from './useDetail';

interface DataType {
    key: React.Key;
    name: string;
    description: string;
}
const columns: ColumnsType<DataType> = [
    { title: '序号', dataIndex: 'id' },
    { title: '运动员姓名', dataIndex: 'chineseName' },
    {
        title: '操作',
        dataIndex: '',
        render: () => <a>Delete</a>,
    },
];

const SecDetails = memo((props: any) => {
    // const routes = [
    //     {
    //         path: '/systemManage/framework/stair',
    //         breadcrumbName: '一级组织',
    //     },
    //     {
    //         path: '/systemManage/framework/secDetails',
    //         breadcrumbName: '二级组织',
    //     },
    //     {
    //         path: '/systemManage/framework/secDetails',
    //         breadcrumbName: '详情',
    //     },
    // ]  
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
            {/* <PageHeader
                className="site-page-header"
                breadcrumb={{ routes }}
            /> */}
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