import { Input, Select } from "antd"

export const stairInfo = [
    {
        name: 'name',
        label: '组织名称',
        require: true,
    },
    {
        name: 'simpleName',
        label: '组织简称',
        require: true,
    },
    {
        name: 'engName',
        label: '组织英文名'
    },
    {
        name: 'code',
        label: '组织编码',
        require: true,
    },
    {
        name: 'changeLeader',
        label: '分管领导'
    },
    {
        name: 'departmentLeader',
        label: '部门领导'
    }
]

const oneLevel = [
    {
        value: '篮球',
        content: '篮球',
    },
    {
        value: '羽毛球',
        content: '羽毛球',
    },
    {
        value: 'ccc',
        content: 'ccc',
    },
    {
        value: '足球',
        content: '足球',
    }
]

export const secLevelInfo = [
    {
        name: 'name',
        label: '二级组织名称',
        require: true,
    },
    {
        name: 'oneOrg',
        label: '所属一级组织',
        require: true,
        component: Select,
        optionList: oneLevel,
    },
]

