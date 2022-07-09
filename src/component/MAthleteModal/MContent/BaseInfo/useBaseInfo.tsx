import { getAthleteMsg, postAthleteMsg, putAthleteMsg } from '../../../../services/athlete';
import moment from 'moment';
import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { initialPersonalInfo } from '../../../../type/personalInfo';
import { allOneName } from '../../../../services/system';
import { initSportProject } from '../../../../constant/picker';

export const useBaseInfo = (getNumber: (number: string) => void, id: number) => {
    const [formData, setFormData] = useState(new FormData());
    const [sportProject, setSportProject] = useState(initSportProject)
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
    const getOneOranization = async () => {
        const res = await allOneName();
        console.log(res);

    }

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getAthleteMsg({ id });
            const msg = res.data.records[0];
            msg.birth = moment(msg.birth, dateFormat);
            msg.projectGroup = msg.projectGroup.split(',');
            setImageUrl(msg.picture);
            setNumber(msg.number);
            setValue(msg);
            console.log(msg);
        }
        id && getInitialValues();
        getOneOranization();
    }, [id])

    useEffect(() => {
        form.setFieldsValue(value);
        number && getNumber(number);
    }, [value, number, getNumber, form])

    return {
        form,
        value,
        onFinish,
        imageUrl,
        getFormData,
        sportProject
    }
}