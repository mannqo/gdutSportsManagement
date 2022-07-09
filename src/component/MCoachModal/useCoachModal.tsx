
import { Form, Modal } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { initSportProject } from '../../constant/picker';
import { getCoachMsg, postCoachMsg, putCoachMsg } from '../../services/coach';
import { initialCoachInfo } from '../../type/coach';

export const useCoachModal = (id?: number) => {
    const [value, setValue] = useState(initialCoachInfo);
    const [sportProject, setSportProject] = useState(initSportProject)
    const [imageUrl, setImageUrl] = useState('');
    const [form] = Form.useForm();

    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (values: any) => {
        Modal.confirm({
            title: '确定提交该教练的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postCoachMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (values: any) => {
        Modal.confirm({
            title: '确定修改该教练的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putCoachMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }

    const onFinish = (values: any) => {
        console.log(values); 
        id && putInfo(values);
        !id && postInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getCoachMsg({ id });
            const msg = res.data.records[0];
            setImageUrl(msg.cardPicture);
            msg.birth = moment(msg.birth, dateFormat);
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value, form])

    return {
        form,
        value,
        onFinish,
        imageUrl,
        sportProject
    }
}