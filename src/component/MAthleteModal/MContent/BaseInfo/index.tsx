import { Form, Row, Col, Input, Select, Button, Upload } from 'antd'
import React, { memo } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import MUploadImg from '../../../MSelector/MUploadImg';
import MDatePicker from '../../../MSelector/MDatePicker';
import { ImageWrapper } from '../../../../config/style';
import { useBaseInfo } from './useBaseInfo';

const { Option } = Select;

const BaseInfo = memo((props: { getNumber: (number: string) => void, id: number }) => {
    const { getNumber, id } = props;
    const {
        form,
        value,
        onFinish,
        imageUrl,
        getFormData
    } = useBaseInfo(getNumber, id);
    return (
        <>
            <ImageWrapper>
                <Form
                    form={form}
                    preserve={false}
                    initialValues={value}
                    layout={'vertical'}
                    name="baseInfo"
                    onFinish={onFinish}
                >
                    <Row justify='center' align='middle' gutter={[32, 16]}>
                        {athleteBaseInfo.map((item) => (
                            <Col span={6} key={item.name}>
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
                                    {
                                        item.component === 'MPicker' ?
                                            <Select placeholder={`选择${item.label}`}>
                                                {
                                                    item.optionList && item.optionList.map((item: any) => (
                                                        <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
                                                    ))
                                                }
                                            </Select>
                                            : item.component === 'MDatePicker' ?
                                                <MDatePicker />
                                                : item.component === 'MUploadImg' ?
                                                    <MUploadImg initialImageUrl={value && value[item.name]} name={item.name} getFormData={getFormData} />
                                                    : <Input placeholder={`填写${item.label}`} />
                                    }
                                </Form.Item>
                            </Col>
                        )
                        )}
                        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                            <Button type="primary" htmlType="submit" >
                                提交基本信息
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </ImageWrapper>

        </>

    )
})

export default BaseInfo