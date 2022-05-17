
import { Form, Modal } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { FileName } from '../../constant/event';
import { agreeApply, ApproveRes } from '../../services/approve';
import { getEventMsg, postEventMsg, putEventMsg } from '../../services/event';
import { initialEventValue } from '../../type/eventInfo';

export const useEventModal = (id?: number) => {
    const [formData, setFormData] = useState(new FormData())
    const [value, setValue] = useState(initialEventValue);
    const [form] = Form.useForm();

    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (formData: FormData, values: any) => {
        Modal.confirm({
            title: '确定提交该比赛的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEventMsg({ formData, values });
                Modal.info({
                    title: res.message,
                })
                setValue(initialEventValue);
            }
        });
    }
    const putInfo = async (formData: FormData, values: any) => {
        Modal.confirm({
            title: '确定修改该比赛的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putEventMsg({ formData, values });
                await getInitialValues();
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const getFormData = async (name: FileName, file: File) => {
        formData.append(name, file);
        return formData;
    }
    const onFinish = (values: any) => {
        values.id = id;
        id && putInfo(formData, values);
        !id && postInfo(formData, values);
    };
    const getInitialValues = async () => {
        const res = await getEventMsg({ id });
        const msg = res.data.records[0];
        msg.birth = moment(msg.birth, dateFormat);
        msg.id = id;
        setValue(msg);
    }
    const approveApply = async () => {
        const res = await agreeApply(value);
        console.log(res);
    }
    const refuseApply = async () => {

    }
    useEffect(() => {
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.resetFields();
    }, [value, form])
    return {
        form,
        value,
        onFinish,
        getFormData,
        approveApply,
        refuseApply
    }
}