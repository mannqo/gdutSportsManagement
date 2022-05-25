// import { Form, Row, Col, Input, Button, Select } from 'antd'
// import React, { memo } from 'react'
// import { athleteEntranceExam } from '../../../../constant/athlete';

// import MUploadImg from '../../../MSelector/MUploadImg';
// import { ImageWrapper } from '../../../../config/style';
// import { useEntranceExam } from './useEntranceExam';

// const { Option } = Select;
// const EntranceExam = memo((props: { number: string, id: number }) => {
//     const {
//         form,
//         value,
//         onFinish,
//         imageUrl,
//         id
//     } = useEntranceExam(props.number);

//     return (
//         <ImageWrapper>
//             <Form
//                 form={form}
//                 preserve={false}
//                 initialValues={value}
//                 name="entranceExam"
//                 onFinish={onFinish}
//             >
//                 <Row gutter={10}>
//                     {athleteEntranceExam.map((item) => (
//                         <Col span={20} key={item.name}>
//                             <Form.Item
//                                 name={item.name}
//                                 label={item.label}
//                                 rules={[
//                                     {
//                                         required: item.require ? true : false,
//                                         message: '请填写必填信息',
//                                     },
//                                 ]}
//                             >
//                                 {
//                                     item.component === 'MPicker' ?
//                                         <Select placeholder={`请填写${item.label}`}>
//                                             {
//                                                 item.optionList && item.optionList.map((item: any) => (
//                                                     <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
//                                                 ))
//                                             }
//                                         </Select> : <Input placeholder={`填写${item.label}`} />
//                                 }
//                             </Form.Item>
//                         </Col>
//                     ))}

//                 </Row>

//                 <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
//                     <Button type="primary" htmlType="submit">
//                         提交高考情况信息
//                     </Button>
//                 </Form.Item>
//             </Form>
//             <div className='image'>
//                 <p>身份证件:</p>
//                 <MUploadImg initialImageUrl={imageUrl} id={id} type={14}></MUploadImg>
//             </div>
//         </ImageWrapper >
//     )
// })

// export default EntranceExam