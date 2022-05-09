import { useEffect, useState } from "react";
import { getEntranceExam, postEntranceExam, putEntranceExam } from '../../../../services/athlete';
import moment from 'moment';
import { Form, Modal } from "antd";

export const useEntranceExam = (number: string) => {
    const [value, setValue] = useState();
    const [id, setId] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const [form] = Form.useForm();

    const dateFormat = 'YYYY-MM-DD';

    const postInfo = (values: any) => {
        values.number = number;;
        Modal.confirm({
            title: '确定提交该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEntranceExam(values)
                Modal.info({
                    title: res.message,
                })
                if (res.data) {
                    setId(res.data.id);
                }
            }
        });
    }
    const putInfo = (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putEntranceExam(values)
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const onFinish = (values: any) => {
        (!value || !id) && postInfo(values);
        (value && id) && putInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getEntranceExam({ number });
            if (res.data) {
                const msg = res.data.records[0];
                msg.entranceTime = moment(msg.entranceTime, dateFormat);
                setImageUrl(msg.idCard);
                setValue(msg);
                setId(msg.id);
            } else {
                setValue(undefined);
            }
        }
        number && getInitialValues();
    }, [number, id])

    useEffect(() => {
        form.resetFields();
    }, [value])
    return {
        form,
        value,
        onFinish,
        imageUrl,
        id
    }
}