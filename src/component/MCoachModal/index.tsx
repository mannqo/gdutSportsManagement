import { Form, Row, Col, Input, Button, DatePicker, Modal } from 'antd'
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react'
import { coachInfo } from '../../constant/coach';
import { getCoachMsg, postCoachMsg, putCoachMsg } from '../../services/coach';

const MCoachModal = memo((props: any) => {
    const [value, setValue] = useState();
    const [form] = Form.useForm();
    const { id } = props;

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
            msg.birth = moment(msg.birth, dateFormat);
            setValue(msg);
        }
        id && getInitialValues();
    }, [id])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value, form])

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>教练信息表</h2>
            <Form
                form={form}
                name="baseInfo"
                onFinish={onFinish}
                style={{ width: 900 }}
            >
                <Row gutter={10}>
                    {coachInfo.map((item) => (
                        <Col span={10} key={item.name}>
                            <Form.Item
                                name={item.name}
                                label={item.label}
                            >
                                {
                                    item.component === 'MDatePicker' ?
                                        <DatePicker placeholder='选择日期' format={dateFormat} /> :
                                        <Input placeholder={`填写${item.label}`} />
                                }
                            </Form.Item>
                        </Col>
                    )
                    )}
                </Row>

                <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        提交教练信息
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
})

export default MCoachModal