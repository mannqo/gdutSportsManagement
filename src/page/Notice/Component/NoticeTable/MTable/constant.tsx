import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { Modal } from "antd";
import { deleteNoticeMsg } from "../../../../../services/notice";

const deleteAthlete = (id: number) => {
    Modal.confirm({
        title: '确定要删除该通知吗?',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: async () => {
            const res = await deleteNoticeMsg({ id });
            Modal.info({
                title: res.message,
            })
        }
    });
}
export const noticeColumns = [
    {
        title: '编号',
        dataIndex: 'id'
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
        render: (id: number) => (
            <DeleteOutlined onClick={() => deleteAthlete(id)} />
        )
    }
]