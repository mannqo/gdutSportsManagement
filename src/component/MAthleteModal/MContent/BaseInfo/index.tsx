import { Form, Row, Col, Input, Select, Button, Upload, Cascader, DatePicker } from 'antd'
import React, { memo } from 'react'
import { athleteBaseInfo } from '../../../../constant/athlete';
import MUploadImg from '../../../MSelector/MUploadImg';
import { ImageWrapper } from '../../../../config/style';
import { useBaseInfo } from './useBaseInfo';

const { Option } = Select;

const BaseInfo = memo((props: { id: number, getNumber?: (number: string) => void }) => {
    const { getNumber, id } = props;
    const {
        form,
        value,
        onFinish,
        getFormData,
        sportProject
    } = useBaseInfo(id, getNumber);
    const dateFormat = 'YYYY-MM-DD';

    return (
        <>
            <ImageWrapper>
                <Form
                    form={form}
                    layout={'vertical'}
                    name="baseInfo"
                    onFinish={onFinish}
                >
                    <Row justify='center' align='middle' gutter={[32, 16]}>
                        <Col span={6} key='prjectGroup'>
                            <Form.Item name='projectGroup' label='运动项目' rules={[{ required: true }]}>
                                <Cascader
                                    key='projectGroup'
                                    options={sportProject}
                                    placeholder="填写组别"
                                />
                            </Form.Item>
                        </Col>
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
                                                <DatePicker placeholder='选择日期' format={dateFormat} />
                                                : item.component === 'MUploadImg' ?
                                                    <MUploadImg initialImageUrl={value && value[item.name]} name={item.name} getFormData={getFormData} />
                                                    : <Input placeholder={`填写${item.label}`} />
                                    }
                                </Form.Item>
                            </Col>
                        )
                        )}
                        <Form.Item >
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