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
    const [total, setTotal] = useState(0);
    const [key, setKey] = useState('1');

    const notyetColumns = [
        {
            title: '序号',
            dataIndex: 'id'
        },
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
            title: '序号',
            dataIndex: 'id'
        },
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

    const onChange = async (page: number) => {
        const res = await getApproveMsg({ pn: page, size: 10, state: key })
        const { data } = res;
        setData(data.records);
        setTotal(data.total);
    }
    const handleTabChange = async (key: string) => {
        setKey(key);
        const res = await getApproveMsg({ pn: 1, size: 10, state: key })
        const { data } = res;
        setData(data.records);
        setTotal(data.total);
    }
    useEffect(() => {
        onChange(1);
    }, [])
    return {
        notyetColumns,
        alreadyColumns,
        visible1, visible2,
        total,
        id, data,
        hideModal,
        onChange,
        handleTabChange
    }
}
