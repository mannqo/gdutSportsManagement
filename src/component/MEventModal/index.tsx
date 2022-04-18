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
    const { id } = props;

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
        // console.log(name, file);
        // console.log(value);
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
            msg.name = JSON.parse(msg.name).toString()
            msg.coach = JSON.parse(msg.coach).toString()
            msg.leader = JSON.parse(msg.leader).toString()
            msg.approvePerson = JSON.parse(msg.approvePerson);
            msg.birth = moment(msg.birth, dateFormat);
            // 文件
            msg.competitionPicture = JSON.parse(msg.competitionPicture);
            msg.orderBook = JSON.parse(msg.orderBook);
            msg.prizesPicture = JSON.parse(msg.prizesPicture);
            msg.resultsBook = JSON.parse(msg.resultsBook);
            msg.resultsCertificate = JSON.parse(msg.resultsCertificate);

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
                    <Button type="primary" htmlType="submit">
                        提交比赛信息
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
})

export default MEventModal