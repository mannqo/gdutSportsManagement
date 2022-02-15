import { acceptanceLevel, acceptanceType, belongCoach, examProvinces, gender, group, idCardType, inSchool, nation, sportProject } from "./picker"

export const athleteBaseInfo = [
    {
        name: 'schoolName',
        label: '学校名称',
    },
    {
        name: 'sportProject',
        label: '运动项目',
        require: true,
        component: 'MPicker',
        optionList: sportProject
    },
    {
        name: 'chineseName',
        label: '中文姓名',
        require: true,
    },
    {
        name: 'group',
        label: '组别',
        require: true,
        component: 'MPicker',
        optionList: group
    },
    {
        name: 'usedName',
        label: '曾用名'
    },
    {
        name: 'gender',
        label: '性别',
        component: 'MPicker',
        optionList: gender
    },
    {
        name: 'nation',
        label: '民族',
        component: 'MPicker',
        optionList: nation
    },
    {
        name: 'birth',
        label: '出生日期',
        component: 'MDatePicker',
    },
    {
        name: 'birthPlace',
        label: '出生地',
    },
    {
        name: 'nativePlace',
        label: '籍贯',
    },
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
        name: 'idCardType',
        label: '身份证件类型',
        component: 'MPicker',
        optionList: idCardType
    },
    {
        name: 'idCardNumber',
        label: '身份证件号码'
    },
    {
        name: 'idCardPlace',
        label: '身份证件所属地区'
    },
    {
        name: 'acceptanceLevel',
        label: '录取层次',
        component: 'MPicker',
        optionList: acceptanceLevel
    },
]

export const athleteEntrance = [
    {
        name: 'acceptanceType',
        label: '录取方式',
        component: 'MPicker',
        optionList: acceptanceType
    },
    {
        name: 'entranceTime',
        label: '入学时间',
        component: 'MDatePicker',
    },
    {
        name: 'originalSchool',
        label: '原所在学校',
        require: true,
    },
    {
        name: 'totalCulturalScore',
        label: '统考文化总分',
        require: true,
    },
    {
        name: 'takingProfessional',
        label: '录取专业',
        require: true,
    },
    {
        name: 'ingCollege',
        label: '所在院系',
        require: true,
    },
    {
        name: 'levelClass',
        label: '年级班级',
        require: true,
    },
    {
        name: 'examinationPlace',
        label: '报考地点',
        require: true,
    },
    {
        name: 'addedScore',
        label: '体尖加分分数',
        require: true,
    },
    {
        name: 'studentCardNum',
        label: '学生证号码',
        require: true,
    },
    {
        name: 'belongCoach',
        label: '所属教练',
        require: true,
        component: 'MPicker',
        optionList: belongCoach
    },
]

export const athleteCollegeExam = [
    {
        name: 'examProvinces',
        label: '考试所在省份/直辖市',
        require: true,
        component: 'MPicker',
        optionList: examProvinces
    },
    {
        name: 'examPrefecture',
        label: '考试所在地级市',
        require: true,
    },
    {
        name: 'admissionTicketNumber',
        label: '准考证号码',
        require: true,
    },
    {
        name: 'inSchool',
        label: '是否在校',
        require: true,
        component: 'MPicker',
        optionList: inSchool
    },
]

export const athletePersonalMatch = [
    {
        name: 'competitionName',
        label: '比赛名称'
    },
    {
        name: 'competitionTime',
        label: '比赛时间'
    }
]