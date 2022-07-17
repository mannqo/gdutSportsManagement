import { Redirect } from "react-router-dom";
import Main from "../page/Main";
import AthleteInfo from "../page/Main/Athlete";
import PersonalInfo from "../page/Main/Athlete/PersonalInfo";
import Check from "../page/Main/Check";
import CoachInfo from "../page/Main/Coach";
import EventInfo from "../page/Main/Event";
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

interface Route {
    path: string,
    component?: React.MemoExoticComponent<(props: any) => JSX.Element>,
    children?: Array<Route>
    exact?: boolean,
    auth?: Array<string>,
    icon?: any,
    render?: () => JSX.Element,
    content?: string
}

const routes: Array<Route> = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/",
                auth: ['root'],
                exact: true,
                render: () => <Redirect to="/athleteManage/info" />
            },
            {
                path: "/athleteManage",
                component: MNormalSider,
                children: [
                    {
                        path: "/athleteManage",
                        auth: ['root'],
                        exact: true,
                        render: () => <Redirect to="/athleteManage/info" />
                    },
                    {
                        path: '/athleteManage/info',
                        auth: ['root'],
                        component: AthleteInfo,
                        icon: MailOutlined,
                        content: '运动员信息表'
                    },
                    {
                        path: '/athleteManage/personalInfo',
                        auth: ['athlete'],
                        component: PersonalInfo,
                        icon: PlusOutlined,
                        content: '运动员个人信息'
                    }
                ]
            },
            {
                path: "/eventManage",
                auth: ['root'],
                component: MNormalSider,
                children: [
                    {
                        path: "/eventManage",
                        exact: true,
                        render: () => <Redirect to="/eventManage/info" />
                    },
                    {
                        path: "/eventManage/info",
                        component: EventInfo,
                        icon: MailOutlined,
                        content: '比赛信息'
                    }
                ]
            },
            {
                path: "/coachInfo",
                auth: ['root'],
                component: MNormalSider,
                children: [
                    {
                        path: "/coachInfo",
                        exact: true,
                        render: () => <Redirect to="/coachInfo/info" />
                    },
                    {
                        path: "/coachInfo/info",
                        component: CoachInfo,
                        icon: MailOutlined,
                        content: '教练信息表'
                    }
                ]
            },
            {
                path: "/checkInfo",
                auth: ['root'],
                component: Check,
            },
            {
                path: "/systemManage",
                auth: ['root'],
                component: System,
                children: [
                    {
                        path: "/systemManage",
                        exact: true,
                        render: () => <Redirect to="/systemManage/framework/Event" />
                    },
                    {
                        path: "/systemManage/framework",
                        component: Center,
                        children: [
                            {
                                path: "/systemManage/framework/stair",
                                component: Stair,
                                children: [
                                    {
                                        path: "/systemManage/framework/stair",
                                        exact: true,
                                        component: StairTable,
                                    },
                                    {
                                        path: "/systemManage/framework/stair/secLevel",
                                        exact: true,
                                        component: FitSec,
                                    },
                                    {
                                        path: "/systemManage/framework/stair/secLevel/detail",
                                        exact: true,
                                        component: SecDetails,
                                    },
                                ]
                            },
                            {
                                path: "/systemManage/framework/secLevel",
                                component: SecondLevel,
                                children: [
                                    {
                                        path: "/systemManage/framework/secLevel",
                                        exact: true,
                                        component: SecTable,
                                    },
                                    {
                                        path: "/systemManage/framework/secLevel/detail",
                                        exact: true,
                                        component: SecDetails
                                    },
                                ]
                            },

                        ]
                    },

                    {
                        path: "/systemManage/character",
                        component: Character
                    },
                ]
            },
            {
                path: "/approveManage",
                auth: ['root'],
                component: MNormalSider,
                children: [
                    {
                        path: "/approveManage",
                        exact: true,
                        render: () => <Redirect to="/approveManage/event" />
                    },
                    {
                        path: "/approveManage/event",
                        exact: true,
                        component: ApproveEvent,
                        icon: MailOutlined,
                        content: '比赛审核'
                    }
                ]
            },
            {
                path: "/notice",
                component: MNormalSider,
                children: [
                    {
                        path: "/notice",
                        auth: ['root'],
                        exact: true,
                        render: () => <Redirect to="/notice/event" />
                    },
                    {
                        path: "/notice/event",
                        auth: ['root', 'athlete'],
                        component: EventNotice,
                        icon: InfoCircleOutlined,
                        content: '比赛通知'
                    },
                    {
                        path: '/notice/manage',
                        auth: ['root'],
                        component: NoticeManage,
                        icon: RightOutlined,
                        content: '通知管理'
                    }
                ]
            }
        ]
    },
]

export default routes;