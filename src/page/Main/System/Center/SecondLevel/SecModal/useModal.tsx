import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { getSecMsg, postSecMsg, putSecMsg, } from "../../../../../../services/system";

export const useModal = (id?: number) => {
    const [value, setValue] = useState();
    const [form] = Form.useForm();

    const postInfo = async (values: any) => {
        Modal.confirm({
            title: '确认提交该二级组织信息吗',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postSecMsg(values);
                Modal.info({
                    title: res.message,
                })
                
            }
        })
    }
    const putInfo = async (values: any) => {
        Modal.confirm({
            title: '确认提交该二级组织信息吗',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putSecMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        })
    }
    const onFinish = (values: any) => {
        id && putInfo(values);
        !id && postInfo(values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getSecMsg({ id });
            const msg = res.data.records[0];
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value, form])

    return {
        form,
        onFinish,
    }
}