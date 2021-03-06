import { Button, Form, Input, Row, Select } from 'antd'
import React, { memo } from 'react'
import { ImageWrapper } from '../../../../../../config/style'
import { secLevelInfo } from '../../../../../../constant/system'
import { useModal } from './useModal'

const { Option } = Select;
const SecModal = memo((props: { id: number }) => {
    const { id } = props;
    const {
        form,
        onFinish
    } = useModal(id);
    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>二级组织</h2>
            <ImageWrapper>
                <Form
                    form={form}
                    name="firstOrganization"
                    onFinish={onFinish}
                >
                    <Row>
                        {secLevelInfo.map((item) => (
                            <Form.Item
                                key={item.name}
                                name={item.name}
                                label={item.label}
                                required={item.require}
                            >
                                {
                                    item.optionList ?
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
                        )
                        )}
                    </Row>
                    <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                        <div>
                            <Button type="primary" htmlType="submit" >
                                提交二级组织信息
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </ImageWrapper>
        </>
    )
})

export default SecModal