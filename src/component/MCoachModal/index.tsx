import { Form, Row, Col, Input, Button, DatePicker, Modal } from 'antd'
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react'
import { ImageWrapper } from '../../config/style';
import { coachInfo } from '../../constant/coach';
import { getCoachMsg, postCoachMsg, putCoachMsg } from '../../services/coach';
import MUploadImg from '../MSelector/MUploadImg';

const MCoachModal = memo((props: any) => {
    const [value, setValue] = useState();
    const [imageUrl, setImageUrl] = useState('');

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
        id && putInfo(values);
        !id && postInfo(values);
    };

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
    }, [value, form])

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>教练信息表</h2>
            <ImageWrapper>
                <Form
                    form={form}
                    name="coachInfo"
                    onFinish={onFinish}
                >
                    <Row gutter={10}>
                        {coachInfo.map((item) => (
                            <Col span={10} key={item.name}>
                                <Form.Item
                                    name={item.name}
                                    label={item.label}
                                >
                                    {
                                        item.component ?
                                            <item.component />
                                            : <Input placeholder={`填写${item.label}`} />
                                    }
                                </Form.Item>
                            </Col>
                        )
                        )}
                    </Row>

                    <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                        <Button type="primary" htmlType="submit" >
                            提交教练信息
                        </Button>
                    </Form.Item>
                </Form>
                <div className="image">
                    <p>相片:</p>
                    <MUploadImg initialImageUrl={imageUrl} id={id} type={3} />
                </div>
            </ImageWrapper>
        </>
    )
})

export default MCoachModal