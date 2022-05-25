import { Form, Row, Col, Input, Button, Select } from 'antd'
import React, { memo } from 'react'
import { ImageWrapper } from '../../config/style';
import { coachInfo } from '../../constant/coach';
import MUploadImg from '../MSelector/MUploadImg';
import { useCoachModal } from './useCoachModal';

const { Option } = Select;

const MCoachModal = memo((props: { id?: number }) => {
    const { id } = props;
    const {
        form,
        onFinish,
        imageUrl
    } = useCoachModal(id);
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
                                    {item.component ?
                                        <Select placeholder={`选择${item.label}`}>
                                            {
                                                item.optionList && item.optionList.map((item: any) => (
                                                    <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                                ))
                                            }
                                        </Select>
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
                {/* <div className="image">
                    <p>相片:</p>
                    <MUploadImg />
                </div> */}
            </ImageWrapper>
        </>
    )
})

export default MCoachModal