import { Button } from "antd";
import { useEffect, useState } from "react";
import { getNoticeMsg } from "../../../../services/notice";
import { eventInfo } from "../../../../type/infoNum";
import { NoticeInfo } from "../../../../type/noticeInfo";
import ReadButton from "./ReadButton";

export const useList = (type: string) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(0);
    const number = sessionStorage.getItem('number');

    const noticeColumns = [
        {
            title: '编号',
            dataIndex: 'id',
        },
        {
            title: '通知',
            dataIndex: 'message',
        },
        {
            title: '通知对象',
            dataIndex: 'toPerson'
        },
        {
            title: '操作',
            dataIndex: 'id',
            render: (id: number, item: NoticeInfo) => {
                return (
                    <ReadButton id={item.id} isRead={item.isRead} type={eventInfo} />
                )
            }
        }
    ]

    const getNotice = async (page: number) => {
        try {
            setPage(page)
            const res = await getNoticeMsg({ pn: page, type, toPerson: number });
            const { data: { records, total } } = res;
            setTotal(total);
            setData(records);
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = async (page: number) => {
        getNotice(page);
    }

    useEffect(() => {
        getNotice(1);
    }, [])
    return {
        data,
        total,
        onChange,
        noticeColumns
    }
}

