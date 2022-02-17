import { Form, Row, Col, Input, Button, Modal } from 'antd'
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react'
import { athletePersonalMatch } from '../../../../constant/athlete';
import { getSportCompetition, postSportCompetition, putSportCompetition } from '../../../../services/athlete';

const PersonalMatch = memo((props: any) => {
    const [value, setValue] = useState(null);
    const [form] = Form.useForm();
    const { number, id } = props;
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

    return (
        <Form
            form={form}
            name="baseInfo"
            onFinish={onFinish}
            style={{ width: 1000 }}
        >
            <Row gutter={10}>
                {athletePersonalMatch.map((item) => (
                    <Col span={10} key={item.name}>
                        <Form.Item
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    message: '',
                                },
                            ]}
                        >
                            <Input placeholder={`填写${item.label}`} />
                        </Form.Item>
                    </Col>
                ))}

            </Row>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交个人比赛信息
                </Button>
            </Form.Item>
        </Form>
    )
})

export default PersonalMatch