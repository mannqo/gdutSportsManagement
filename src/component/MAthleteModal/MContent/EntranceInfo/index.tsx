import { Form, Row, Col, Input, Button, Select, DatePicker, Modal } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { athleteEntranceInfo } from '../../../../constant/athlete';
import styled from 'styled-components';
import MUploadImg from '../../../MSelector/MUploadImg';
import { getEntranceInfo, postEntranceInfo, putEntranceInfo } from '../../../../services/athlete';
import moment from 'moment';

const { Option } = Select;

const EntranceInfo = memo((props: any) => {
    const [value, setValue] = useState();
    const [form] = Form.useForm();
    const dateFormat = 'YYYY-MM-DD';
    const { number, id } = props;


    const postInfo = async (values: any) => {
        values.number = number;
        Modal.confirm({
            title: '确定提交该运动员入学基本情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await postEntranceInfo(values)
                Modal.info({
                    title: res.message,
                })
            }
        });
    }
    const putInfo = async (values: any) => {
        values.id = id;
        Modal.confirm({
            title: '确定提交该运动员入学基本情况吗?',
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                const res = await putEntranceInfo(values)
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
            const res = await getEntranceInfo({ number }); 
            if (res.data) {
                const msg = res.data.records[0];
                msg.entranceTime = moment(msg.entranceTime, dateFormat);
                setValue(res.data.records[0]);
            }
        }
        id && getInitialValues();
    }, [number])

    useEffect(() => {
        form.setFieldsValue(value);
    }, [value])

    return (
        <Form
            form={form}
            name="entrance"
            onFinish={onFinish}
            style={{ width: 700 }}
        >
            <Row gutter={10}>
                {athleteEntranceInfo.map((item) => (
                    <Col span={10} key={item.name}>
                        <Form.Item
                            name={item.name}
                            label={item.label}
                            rules={[
                                {
                                    required: item.require ? true : false,
                                    message: '请填写必填信息',
                                },
                            ]}
                        >
                            {
                                item.component === 'MPicker' ?
                                    <Select placeholder={`请填写${item.label}`}>
                                        {
                                            item.optionList && item.optionList.map((item: any) => (
                                                <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                            ))
                                        }
                                    </Select>
                                    : item.component === 'MDatePicker' ?
                                        <DatePicker placeholder='选择日期' format={dateFormat} /> :
                                        <Input placeholder={`填写${item.label}`} />
                            }
                        </Form.Item>
                    </Col>
                ))}

            </Row>

            <ImageWrapper>
                <p>学生证:</p>
                <MUploadImg />
            </ImageWrapper>

            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    提交入学情况信息
                </Button>
            </Form.Item>
        </Form>
    )
})
const ImageWrapper = styled.div` 
    position: absolute;
    right: 100px;
    top: 120px;
`

export default EntranceInfo