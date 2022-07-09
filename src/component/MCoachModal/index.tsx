import { Form, Row, Col, Input, Button, Select, Cascader } from 'antd'
import React, { memo } from 'react'
import { ImageWrapper } from '../../config/style';
import { coachInfo } from '../../constant/coach';
import { useCoachModal } from './useCoachModal';

const { Option } = Select;



interface Option {
    value: string | number;
    label: string;
    children?: Option[];
}
const options: Option[] = [
    {
        label: '篮球',
        value: '篮球',
        // children: new Array(20)
        //     .fill(null)
        //     .map((_, index) => ({ label: `Number ${index}`, value: index })),
        children: [
            {
                label: '甲组',
                value: '甲组',
            },
            {
                label: '乙组',
                value: '乙组',
            },
            {
                label: '丙组',
                value: '丙组',
            },
        ]
    },
    {
        label: '足球',
        value: '足球',
        children: [
            {
                label: '甲组',
                value: '甲组',
            },
            {
                label: '乙组',
                value: '乙组',
            },
        ]
    },
];

const MCoachModal = memo((props: { id?: number }) => {
    const { id } = props;
    const {
        form,
        onFinish,
        imageUrl,
        sportProject,
        value
    } = useCoachModal(id);
    console.log(value.projectGroup);

    return (
        <>
            <h2 style={{ textAlign: 'center', lineHeight: '40px' }}>教练信息表</h2>
            <ImageWrapper>
                <Form
                    form={form}
                    name="coachInfo"
                    onFinish={onFinish}
                >
                    <Row gutter={[32, 16]}>
                        <Col span={10} key='projectGroup'>
                            <Form.Item name='projectGroup' label='运动项目' rules={[{ required: true },]}>
                                <Cascader 
                                    style={{ width: '100%' }}
                                    options={options}
                                    // onChange={onChange}
                                    multiple
                                    maxTagCount="responsive"
                                />
                            </Form.Item>
                        </Col>
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