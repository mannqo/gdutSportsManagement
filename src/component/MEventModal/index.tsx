import { Form, Row, Col, Input, Button, Modal, Upload } from 'antd'
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react'
import { eventInfo, FileName } from '../../constant/event';
import { getEventMsg, postEventMsg, putEventMsg } from '../../services/event';
import { initialEventValue } from '../../type/eventInfo';

const MEventModal = memo((props: any) => {
    const [formData, setFormData] = useState(new FormData());  // 存文件
    const [value, setValue] = useState(initialEventValue);
    const [form] = Form.useForm();
    const { id, type } = props;  // type: approve审核 eventInfo比赛信息

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
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const getFormData = async (name: FileName, file: File) => {
        value[name].push(name);
        formData.append(name, file);
        return formData;
    }
    const onFinish = (values: any) => {
        values.id = id;
        id && putInfo(formData, values);
        !id && postInfo(formData, values);
    };

    useEffect(() => {
        const getInitialValues = async () => {
            const res = await getEventMsg({ id });
            const msg = res.data.records[0];
            msg.birth = moment(msg.birth, dateFormat);
            msg.id = id;
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.resetFields();
    }, [value, form])

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>比赛信息表</h2>
            <Form
                form={form}
                preserve={false}
                initialValues={value}
                name="eventInfo"
                onFinish={onFinish}
            >
                <Row gutter={10}>
                    {eventInfo.map((item) => (
                        <Col span={8} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                                rules={[
                                    {
                                        required: item.require ? true : false,
                                        message: `请填写${item.label}`,
                                    },
                                ]}
                            >
                                {item.component ?
                                    <item.component
                                        initfileList={
                                            value[item.name]
                                        }
                                        name={item.name}
                                        getFormData={getFormData} />
                                    : <Input />
                                }
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button style={{ 'display': type === 'eventInfo' ? 'block' : 'none' }} type="primary" htmlType="submit">
                        提交比赛信息
                    </Button>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center', display: type === 'approve' ? 'block' : 'none' }} >
                <Button type='primary' style={{ 'marginRight': '20px' }}>通过申请</Button>
                <Button>拒绝该申请</Button>
            </div>
        </>

    )
})

export default MEventModal