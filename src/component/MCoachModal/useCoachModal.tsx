
import { Form, Modal } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { initSportProject } from '../../constant/picker';
import { getProjectGroup } from '../../services/athlete';
import { getCoachMsg, postCoachMsg, putCoachMsg } from '../../services/coach';
import { initialCoachInfo } from '../../type/coach';
import { formatCascader } from '../../utils/format';

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
        values.id = id;
        console.log(values);

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

    /* 获取运动项目 */
    const getSportProject = async () => {
        const res = await getProjectGroup();
        const formatProject = formatCascader(res.data);
        setSportProject(formatProject);
    }

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
        getSportProject();
    }, [value, form])

    return {
        form,
        value,
        onFinish,
        imageUrl,
        sportProject
    }
}