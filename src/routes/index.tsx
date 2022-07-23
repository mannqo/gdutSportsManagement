import { Redirect } from "react-router-dom";
import Main from "../page/Main";
import AthleteInfo from "../page/Main/Athlete/AthleteManage/AthleteInfo";
import PersonalInfo from "../page/Main/Athlete/PersonalInfo";
import Check from "../page/Main/Check";
import CoachInfo from "../page/Main/Coach/CoachManage/CoachInfo";
import EventInfo from "../page/Main/Event/EventManage/EventInfo";
import System from "../page/Main/System";
import Center from "../page/Main/System/Center";
import SecondLevel from "../page/Main/System/Center/SecondLevel";
import Stair from "../page/Main/System/Center/Stair";
import ApproveEvent from "../page/Main/Approve";
import EventNotice from "../page/Notice/EventNotice";
// import ApproveNotice from "../page/Notice/ApproveNotice";
import { InfoCircleOutlined, MailOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import NoticeManage from "../page/Notice/NoticeManage";
import MNormalSider from "../component/MSider/MNormalSider";
import Character from "../page/Main/System/Character";
import SecDetails from "../page/Main/System/Center/SecondLevel/SecDetails";
import StairTable from "../page/Main/System/Center/Stair/StairTable";
import FitSec from "../page/Main/System/Center/Stair/FitSec";
import SecTable from "../page/Main/System/Center/SecondLevel/SecTable";
import React from "react";
import AthleteManage from "../page/Main/Athlete/AthleteManage";
import MUploadExcel from "../component/MUploadExcel";
import EventManage from "../page/Main/Event/EventManage";
import CoachManage from "../page/Main/Coach/CoachManage";
import Login from "../page/Login";
import NotFind from "../page/NotFind";

export interface Route {
    [key: string]: any,
    path: string,
    component?: React.MemoExoticComponent<(props: any) => JSX.Element>,
    children?: Array<Route>
    exact?: boolean,
    auth?: Array<string>,
    icon?: any,
    render?: () => JSX.Element,
    content?: string,
    type?: string, // 4比赛 3教练 10运动员
}

const routes: Array<Route> = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="login" />
        )
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: "/manage",
        component: Main,
        children: [
            {
                path: "/manage/athleteManage",
                content: '运动员管理',
                component: MNormalSider,
                children: [
                    {
                        path: "/manage/athleteManage",
                        auth: ['管理员'],
                        exact: true,
                        render: () => <Redirect to="/manage/athleteManage/info" />
                    },
                    {
                        path: "/manage/athleteManage",
                        auth: ['在校运动员'],
                        exact: true,
                        render: () => <Redirect to="/manage/athleteManage/personalInfo" />
                    },
                    {
                        path: '/manage/athleteManage/info',
                        auth: ['管理员'],
                        component: AthleteManage,
                        icon: MailOutlined,
                        content: '运动员信息表',
                        children: [
                            {
                                path: '/manage/athleteManage/info',
                                exact: true,
                                component: AthleteInfo,
                            },
                            {
                                path: '/manage/athleteManage/info/uploadExcel',
                                exact: true,
                                component: MUploadExcel,
                                type: '10',
                            }
                        ]
                    },
                    {
                        path: '/manage/athleteManage/personalInfo',
                        auth: ['在校运动员'],
                        component: PersonalInfo,
                        icon: PlusOutlined,
                        content: '运动员个人信息'
                    }
                ]
            },
            {
                path: "/manage/eventManage",
                content: '比赛管理',
                auth: ['管理员'],
                component: MNormalSider,
                children: [
                    {
                        path: "/manage/eventManage",
                        exact: true,
                        render: () => <Redirect to="/manage/eventManage/info" />
                    },
                    {
                        path: "/manage/eventManage/info",
                        component: EventManage,
                        icon: MailOutlined,
                        content: '比赛信息',
                        children: [
                            {
                                path: "/manage/eventManage/info",
                                exact: true,
                                component: EventInfo,
                            },
                            {
                                path: '/manage/eventManage/info/uploadExcel',
                                exact: true,
                                component: MUploadExcel,
                                type: '4'
                            }
                        ]
                    }
                ]
            },
            {
                path: "/manage/coachInfo",
                content: '教练信息',
                auth: ['管理员'],
                component: MNormalSider,
                children: [
                    {
                        path: "/manage/coachInfo",
                        exact: true,
                        render: () => <Redirect to="/manage/coachInfo/info" />
                    },
                    {
                        path: "/manage/coachInfo/info",
                        component: CoachManage,
                        icon: MailOutlined,
                        content: '教练信息表',
                        children: [
                            {
                                path: '/manage/coachInfo/info',
                                exact: true,
                                component: CoachInfo,
                            },
                            {
                                path: '/manage/coachInfo/info/uploadExcel',
                                exact: true,
                                component: MUploadExcel,
                                type: '3',
                            }
                        ]
                    }
                ]
            },
            // {
            //     path: "/checkInfo",
            //     content: '',
            //     auth: ['管理员'],
            //     component: Check,
            // },
            {
                path: "/manage/systemManage",
                content: '系统管理',
                auth: ['管理员'],
                component: System,
                children: [
                    {
                        path: "/manage/systemManage",
                        exact: true,
                        render: () => <Redirect to="/manage/systemManage/framework/stair" />
                    },
                    {
                        path: "/manage/systemManage/framework",
                        component: Center,
                        children: [
                            {
                                path: "/manage/systemManage/framework/stair",
                                component: Stair,
                                children: [
                                    {
                                        path: "/manage/systemManage/framework/stair",
                                        exact: true,
                                        component: StairTable,
                                    },
                                    {
                                        path: "/manage/systemManage/framework/stair/secLevel",
                                        exact: true,
                                        component: FitSec,
                                    },
                                    {
                                        path: "/manage/systemManage/framework/stair/secLevel/detail",
                                        exact: true,
                                        component: SecDetails,
                                    },
                                ]
                            },
                            {
                                path: "/manage/systemManage/framework/secLevel",
                                component: SecondLevel,
                                children: [
                                    {
                                        path: "/manage/systemManage/framework/secLevel",
                                        exact: true,
                                        component: SecTable,
                                    },
                                    {
                                        path: "/manage/systemManage/framework/secLevel/detail",
                                        exact: true,
                                        component: SecDetails
                                    },
                                ]
                            },

                        ]
                    },

                    {
                        path: "/manage/systemManage/character",
                        component: Character
                    },
                ]
            },
            {
                path: "/manage/approveManage",
                content: '审核管理',
                auth: ['管理员'],
                component: MNormalSider,
                children: [
                    {
                        path: "/manage/approveManage",
                        exact: true,
                        render: () => <Redirect to="/manage/approveManage/event" />
                    },
                    {
                        path: "/manage/approveManage/event",
                        exact: true,
                        component: ApproveEvent,
                        icon: MailOutlined,
                        content: '比赛审核'
                    }
                ]
            },
            {
                path: "/manage/notice",
                content: '通知',
                component: MNormalSider,
                children: [
                    {
                        path: "/manage/notice",
                        auth: ['管理员', '在校运动员'],
                        exact: true,
                        render: () => <Redirect to="/manage/notice/event" />
                    },
                    {
                        path: "/manage/notice/event",
                        auth: ['管理员', '在校运动员'],
                        component: EventNotice,
                        icon: InfoCircleOutlined,
                        content: '比赛通知'
                    },
                    {
                        path: '/manage/notice/manage',
                        auth: ['管理员'],
                        component: NoticeManage,
                        icon: RightOutlined,
                        content: '通知管理'
                    }
                ]
            },
        ]
    },
    {
        path: '/404',
        exact: true,
        component: NotFind,
    },
    // {
    //     path: '*',
    //     render: () => (
    //         <Redirect to={'/404'} />
    //     )
    // }
]

export default routes;