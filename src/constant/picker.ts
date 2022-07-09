/* 基本信息 */

/* 运动项目+组别联动 */
export interface Option {
    value: string | number;
    label: string;
    children?: Option[];
}
export const initSportProject: Option[] = [
    {
        value: '篮球',
        label: '篮球',
        children: [
            {
                value: '甲组',
                label: '甲组',
            },
            {
                value: '乙组',
                label: '乙组',
            },
        ],
    },
    {
        value: '足球',
        label: '足球',
        children: [
            {
                value: '甲组',
                label: '甲组',
            },
        ],
    },
];

export const gender = [
    {
        value: '1',
        content: '男',
    },
    {
        value: '0',
        content: '女'
    }
]

// export const sportProject = [
//     {
//         value: '1',
//         content: '运动项目1'
//     },
//     {
//         value: '2',
//         content: '运动项目1'
//     },
//     {
//         value: '3',
//         content: '运动项目1'
//     },
//     {
//         value: '4',
//         content: '运动项目1'
//     },
//     {
//         value: '5',
//         content: '运动项目1'
//     },
// ]

export const nation = [
    {
        value: '1',
        content: '民族1'
    },
    {
        value: '2',
        content: '民族1'
    },
    {
        value: '3',
        content: '民族1'
    },
]

export const idCardType = [
    {
        value: '1',
        content: '居民身份证',
    },
    {
        value: '2',
        content: '港澳居民来往内地通行证',
    },
    {
        value: '3',
        content: '台湾居民来往大陆通行证',
    },
]

export const isSchool = [
    {
        value: '1',
        content: '在校'
    },
    {
        value: '0',
        content: '不在校'
    },
]

// export const acceptanceLevel = [
//     {
//         value: '1',
//         content: '层次1',
//     },
//     {
//         value: '2',
//         content: '层次1',
//     },
//     {
//         value: '3',
//         content: '层次1',
//     },
// ]

/* 入学基本情况 */
// export const acceptanceType = [
//     {
//         value: '1',
//         content: '方式1',
//     },
//     {
//         value: '2',
//         content: '方式1',
//     },
//     {
//         value: '3',
//         content: '方式1',
//     },
// ]

// export const belongCoach = [
//     {
//         value: '1',
//         content: '教练1',
//     },
//     {
//         value: '2',
//         content: '教练1',
//     },
//     {
//         value: '3',
//         content: '教练1',
//     },
// ]

/* 参加高考情况 */
// export const examProvinces = [
//     {
//         value: '1',
//         content: '省份1',
//     },
//     {
//         value: '2',
//         content: '省份2',
//     },
//     {
//         value: '3',
//         content: '省份3',
//     },
// ]

// export const inSchool = [
//     {
//         value: '1',
//         content: '是',
//     },
//     {
//         value: '0',
//         content: '否',
//     },
// ]
