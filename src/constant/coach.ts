import { gender } from "./picker";

export const coachInfo = [
    {
        name: 'number',
        label: '工号',
    },
    {
        name: 'name',
        label: '姓名',
    },
    {
        name: 'gender',
        label: '性别',
        component: 'MPicker',
        optionList: gender 
    },
    {
        name: 'phone',
        label: '手机'
    },
    {
        name: 'idCardNumber',
        label: '身份证号码',
    },
    {
        name: 'professionName',
        label: '职称',
    },
    {
        name: 'project',
        label: '运动项目',
    },
    {
        name: 'groups',
        label: '组别'
    },
]