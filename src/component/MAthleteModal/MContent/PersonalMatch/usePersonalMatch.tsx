import { Form, Modal } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { getSportCompetition, postSportCompetition, putSportCompetition } from '../../../../services/athlete';

export const usePersonalMatch = (number: string, id: number) => {
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD'; 

    const postInfo = (values: any) => {
        values.number = number;;
        Modal.confirm({
            title: '确定提交该运动员参加高考情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postSportCompetition(values)
                Modal.info({
                    title: res.message,
                })
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
                const res = await putSportCompetition(values)
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
            const res = await getSportCompetition({ number });
            if (res.data) {
                const msg = res.data.records[0];
                msg.entranceTime = moment(msg.entranceTime, dateFormat);
                setValue(res.data.records[0]);
            }

        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value])
    return {
        form,
        onFinish
    }
}