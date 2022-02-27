import { Form, Row, Col, Input, Button, Modal } from 'antd'
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react'
import { eventInfo } from '../../constant/event';
import { getEventMsg, postEventMsg, putEventMsg } from '../../services/event';

const MEventModal = memo((props: any) => {
    const [formData, setFormData] = useState(new FormData());
    const [value, setValue] = useState();
    const [form] = Form.useForm();
    const { id } = props;

    const dateFormat = 'YYYY-MM-DD';

    const postInfo = async (values: any) => {
        Modal.confirm({
            title: '确定提交该比赛的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEventMsg(values);
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (formData: FormData, values: any) => {
        Modal.confirm({
            title: '确定修改该比赛的信息吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                formData.get('resultsBook')
                const res = await putEventMsg({ formData, values });
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const getFormData = async (name: string, file: File) => {
        formData.append(name, file);
    }
    const onFinish = (values: any) => {
        values.id = id;
        // values.money = '100'
        // values.beforeOrAfter = 1;
        // values.dataType = 0;
        id && putInfo(formData, values);
        // !id && postInfo(formData, values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getEventMsg({ id });
            const msg = res.data.records[0];
            msg.name = JSON.parse(msg.name).toString()
            msg.coach = JSON.parse(msg.coach).toString()
            msg.leader = JSON.parse(msg.leader).toString()
            msg.birth = moment(msg.birth, dateFormat);
            msg.id = id;
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])
    useEffect(() => {
        form.setFieldsValue(value);
    }, [value, form])

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>比赛信息表</h2>
            <Form
                form={form}
                name="baseInfo"
                onFinish={onFinish}
                style={{ width: 900 }}
            >
                <Row gutter={10}>
                    {eventInfo.map((item) => (
                        <Col span={8} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                            >
                                {item.component ? <item.component getFormData={getFormData} name={item.name} /> : <Input />}
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        提交比赛信息
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
})

export default MEventModal