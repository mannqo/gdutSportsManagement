import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { getEntranceInfo, postEntranceInfo, putEntranceInfo } from '../../../../services/athlete';
import moment from 'moment';

export const useEntranceInfo = (number: string) => {
    const [value, setValue] = useState();
    const [id, setId] = useState(0);
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (values: any) => {
        values.number = number;
        Modal.confirm({
            title: '确定提交该运动员入学基本情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEntranceInfo(values)
                Modal.info({
                    title: res.message,
                })
                if (res.data) {
                    console.log(res.data);
                    setId(res.data.id);
                }
            }
        });
    }
    const putInfo = async (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员入学基本情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putEntranceInfo(values)
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
            const res = await getEntranceInfo({ number });
            if (res.data) {
                const msg = res.data.records[0];
                msg.entranceTime = moment(msg.entranceTime, dateFormat);
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
    }, [value, form])
    return {
        form,
        value,
        onFinish,
        id,
        dateFormat
    }
}