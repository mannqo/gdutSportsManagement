import { getAthleteMsg, postAthleteMsg, putAthleteMsg } from '../../../../services/athlete';
import moment from 'moment';
import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { UploadFile } from 'antd/lib/upload/interface';
import { initialPersonalInfo } from '../../../../type/personalInfo';


export const useBaseInfo = (getNumber: (number: string) => void, id: number) => {
    const [formData, setFormData] = useState(new FormData());
    const [number, setNumber] = useState('');
    const [value, setValue] = useState(initialPersonalInfo);
    const [imageUrl, setImageUrl] = useState('');
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (formData: FormData, values: any) => {
        Modal.confirm({
            title: '确定提交该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                getNumber(values.number);
                const res = await postAthleteMsg({ formData, values });
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (formData: FormData, values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定修改该运动员基本信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putAthleteMsg({ formData, values });
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const onFinish = async (values: any) => {
        id && putInfo(formData, values);
        !id && postInfo(formData, values);
    };
    const getFormData = async (name: string, file: File) => {
        formData.append(name, file);
        return formData;
    }

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
        imageUrl,
        getFormData
    }
}