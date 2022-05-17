import { getAthleteMsg, postAthleteMsg, putAthleteMsg } from '../../../../services/athlete';
import moment from 'moment';
import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';

export const useBaseInfo = (getNumber: (number: string) => void, id: number) => {
    const [number, setNumber] = useState('');
    const [value, setValue] = useState();
    const [imageUrl, setImageUrl] = useState('');
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (values: any) => {
        Modal.confirm({
            title: '确定提交该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                getNumber(values.number);
                const res = await postAthleteMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putAthleteMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const onFinish = async (values: any) => {
        id && putInfo(values);
        !id && postInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getAthleteMsg({ id });
            const msg = res.data.records[0];
            msg.birth = moment(msg.birth, dateFormat);
            setImageUrl(msg.picture);
            setNumber(msg.number);
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.resetFields();
        number && getNumber(number);
    }, [value, number, getNumber, form])

    return {
        form,
        value,
        onFinish,
        imageUrl
    }
}