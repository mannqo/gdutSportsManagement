import { CheckCircleTwoTone, ExclamationCircleTwoTone } from "@ant-design/icons"
import { Button } from "antd"
import { useEffect, useState } from "react"
import { getApproveMsg } from "../../../services/approve"

const statusMapText = {
    '1': '未审核',
    '2': '已审核'
}
export const useApprove = () => {
    const [data, setData] = useState([]);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [id, setId] = useState(0);
    let total1 = 0;
    let total2 = 0;

    const notyetColumns = [
        {
            title: '申请者学号',
            dataIndex: 'resourceNumber',
        },
        {
            title: '申请时间',
            dataIndex: 'time'
        },
        {
            title: '审核状态',
            dataIndex: 'state',
            render: () => (
                <>
                    <ExclamationCircleTwoTone twoToneColor="#eb2f96" />
                    <span>{statusMapText[1]}</span>
                </>

            )
        },
        {
            title: '申请内容',
            dataIndex: 'contentId',
            render: (id: number) => (
                <div onClick={() => viewDetail1(id)}>
                    <Button type='primary' size='small'>查看详情</Button>
                </div >
            )
        },
    ]
    const alreadyColumns = [
        {
            title: '审核人工号',
            dataIndex: 'number',
        },
        {
            title: '审核意见',
            dataIndex: 'message',
            render: (message: string) => (
                <>{message ? message : 'null'}</>
            )
        },
        {
            title: '审核时间',
            dataIndex: 'approveTime',
            render: (approveTime: string) => (
                <>{approveTime ? approveTime : 'null'}</>
            )
        },
        {
            title: '申请内容',
            dataIndex: 'contentId',
            render: (id: number) => (
                <div onClick={() => viewDetail2(id)}>
                    <Button type='primary' size='small'>查看详情</Button>
                </div >
            )
        },
        {
            title: '审核状态',
            dataIndex: 'state',
            render: () => (
                <>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                    <span>{statusMapText[2]}</span>
                </>
            )
        },
    ]
    const viewDetail1 = (id: number) => {
        setId(id);
        setVisible1(true);
    }
    const viewDetail2 = (id: number) => {
        setId(id);
        setVisible2(true);
    }
    const hideModal = () => {
        setVisible1(false);
        setVisible2(false);
    }
    const getApproveInfo = async (page: number) => {
        const res = await getApproveMsg({ pn: page, size: 10 })
        const { data } = res;
        setData(data.records);
        total1 = data.length ? data.filter((item: any) => item.state === 1).length : 0;
        total2 = data.length ? data.filter((item: any) => item.state === 2).length : 0;
    }

    const onChange = () => {

    }
    useEffect(() => {
        getApproveInfo(1);
    }, [])
    return {
        notyetColumns,
        alreadyColumns,
        hideModal,
        total1, total2,
        visible1, visible2,
        id, data,
        onChange,
    }
}
