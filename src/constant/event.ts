import MUpload from "../component/MSelector/MUpload";

export const eventInfo = [
    {
        name: 'desgination',
        label: '名称'
    },
    {
        name: 'name',
        label: '运动员姓名'
    },
    {
        name: 'coach',
        label: '教练'
    },
    {
        name: 'leader',
        label: '领队'
    },
    {
        name: 'competitionTime',
        label: '比赛时间'
    },
    {
        name: 'competitionProject',
        label: '比赛项目'
    },
    {
        name: 'competitionPlace',
        label: '比赛地点'
    },
    {
        name: 'results',
        label: '成绩'
    },
    {
        name: 'competitionLevel',
        label: '比赛级别'
    },
    {
        name: 'resultsBook',
        label: '成绩册',
        component: MUpload,
    },
    {
        name: 'orderBook',
        label: '秩序册',
        component: MUpload,
    },
    {
        name: 'competitionPicture',
        label: '比赛照片',
        component: MUpload,
    },
    {
        name: 'resultsCertificate',
        label: '成绩证书',
        component: MUpload,
    },
    {
        name: 'prizesPicture',
        label: '颁奖照片',
        component: MUpload,
    },
]