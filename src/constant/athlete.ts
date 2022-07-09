import { gender, idCardType, isSchool, nation } from "./picker"
import { ModalType } from "../type/ModalType"
import MTimePicker from "../component/MSelector/MTimePicker"

export type BaseInfoFileName = 'idCardFront' | 'idCardAfter' | 'picture' | 'studentReport';

export const athleteBaseInfo: ModalType[] = [
    {
        name: 'chineseName',
        label: '中文姓名',
        require: true,
    },
    {
        name: 'gender',
        label: '性别',
        component: 'MPicker',
        optionList: gender,
        require: true,
    },
    // {
    //     name: 'sportProject',
    //     label: '运动项目',
    //     require: true,
    //     component: 'Cascader',
    // },
    // {
    //     name: 'inGroup',
    //     label: '组别',
    //     require: true,
    //     component: 'MPicker',
    //     optionList: group
    // },
    {
        name: 'high',
        label: '身高',
        require: true,
    },
    {
        name: 'weight',
        label: '体重',
        require: true,
    },
    {
        name: 'number',
        label: '学号',
        require: true,
    },
    {
        name: 'nation',
        label: '民族',
        component: 'MPicker',
        optionList: nation
    },
    {
        name: 'college',
        label: '学院',
    },
    {
        name: 'professional',
        label: '录取专业'
    },
    {
        name: 'aclass',
        label: '班级',
    },
    {
        name: 'birth',
        label: '出生日期',
        component: 'MDatePicker',
    },
    {
        name: 'idCardNumber',
        label: '身份证件号码'
    },
    {
        name: 'idCardType',
        label: '身份证类型',
        component: 'MPicker',
        optionList: idCardType
    },
    {
        name: 'phone',
        label: '手机号码',
    },
    {
        name: 'isSchool',
        label: '是否在校',
        component: 'MPicker',
        optionList: isSchool
    },
    {
        name: 'idCardFront',
        label: '身份证正面',
        component: 'MUploadImg',
        require: true
    },
    {
        name: 'idCardAfter',
        label: '身份证反面',
        component: 'MUploadImg',
        require: true
    },
    {
        name: 'picture',
        label: '照片路径',
        component: 'MUploadImg',
        require: true
    },
    {
        name: 'studentReport',
        label: '学籍报告',
        component: 'MUploadImg',
    }
]

// export const athleteEntranceInfo = [
//     {
//         name: 'acceptanceType',
//         label: '录取方式',
//         component: 'MPicker',
//         optionList: acceptanceType
//     },
//     {
//         name: 'entranceTime',
//         label: '入学时间',
//         component: 'MDatePicker',
//     },
//     {
//         name: 'originalSchool',
//         label: '原所在学校',
//         require: true,
//     },
//     {
//         name: 'totalCulturalScore',
//         label: '统考文化总分',
//         require: true,
//     },
//     {
//         name: 'takingProfessional',
//         label: '录取专业',
//         require: true,
//     },
//     {
//         name: 'ingCollege',
//         label: '所在院系',
//         require: true,
//     },
//     {
//         name: 'levelClass',
//         label: '年级班级',
//         require: true,
//     },
//     {
//         name: 'examinationPlace',
//         label: '报考地点',
//         require: true,
//     },
//     {
//         name: 'addedScore',
//         label: '体尖加分分数',
//         require: true,
//     },
//     {
//         name: 'studentCardNum',
//         label: '学生证号码',
//         require: true,
//     },
//     {
//         name: 'belongCoach',
//         label: '所属教练',
//         require: true,
//         component: 'MPicker',
//         optionList: belongCoach
//     },
// ]

// export const athleteEntranceExam = [
//     {
//         name: 'examProvinces',
//         label: '考试所在省份/直辖市',
//         require: true,
//         component: 'MPicker',
//         optionList: examProvinces
//     },
//     {
//         name: 'examPrefecture',
//         label: '考试所在地级市',
//         require: true,
//     },
//     {
//         name: 'admissionTicketNumber',
//         label: '准考证号码',
//         require: true,
//     },
//     {
//         name: 'inSchool',
//         label: '是否在校',
//         require: true,
//         component: 'MPicker',
//         optionList: inSchool
//     },
// ]

export const athletePersonalMatch = [
    {
        name: 'competitionName',
        label: '比赛名称'
    },
    {
        name: 'competitionTime',
        label: '比赛时间',
        component: MTimePicker
    }
]
