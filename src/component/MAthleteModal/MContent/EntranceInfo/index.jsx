// import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd'
// import React, { memo } from 'react'
// import { athleteEntranceInfo } from '../../../../constant/athlete';
// import MUploadImg from '../../../MSelector/MUploadImg';
// import { ImageWrapper } from '../../../../config/style';
// import { useEntranceInfo } from './useEntranceInfo';

// const { Option } = Select;

// const EntranceInfo = memo((props: { number: string }) => {
//     const {
//         form,
//         value,
//         onFinish,
//         id,
//         dateFormat
//     } = useEntranceInfo(props.number);

//     return (
//         <>
//             <ImageWrapper>
//                 <Form
//                     form={form}
//                     preserve={false}
//                     initialValues={value}
//                     name="entranceInfo"
//                     onFinish={onFinish}
//                 >
//                     <Row gutter={10}>
//                         {athleteEntranceInfo.map((item) => (
//                             <Col span={10} key={item.name}>
//                                 <Form.Item
//                                     name={item.name}
//                                     label={item.label}
//                                     rules={[
//                                         {
//                                             required: item.require ? true : false,
//                                             message: '请填写必填信息',
//                                         },
//                                     ]}
//                                 >
//                                     {
//                                         item.component === 'MPicker' ?
//                                             <Select placeholder={`请填写${item.label}`}>
//                                                 {
//                                                     item.optionList && item.optionList.map((item: any) => (
//                                                         <Option key={item.value} value={item.content} label={item.content}>{item.content}</Option>
//                                                     ))
//                                                 }
//                                             </Select>
//                                             : item.component === 'MDatePicker' ?
//                                                 <DatePicker placeholder='选择日期' format={dateFormat} /> :
//                                                 <Input placeholder={`填写${item.label}`} />
//                                     }
//                                 </Form.Item>
//                             </Col>
//                         ))}

//                     </Row>


//                     <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
//                         <Button type="primary" htmlType="submit">
//                             提交入学情况信息
//                         </Button>
//                     </Form.Item>
//                 </Form>
//                 <div className="image">
//                     <p>学生证:</p>
//                     <MUploadImg id={id} type={15} />
//                 </div>
//             </ImageWrapper>
//         </>
//     )
// })


// export default EntranceInfo