import { Redirect } from "react-router-dom";
import Main from "../page/Main";
import Athlete from "../page/Main/Athlete";
import AthleteInfo from "../page/Main/Athlete/Info";
import Mqtest from "../page/Main/Athlete/xxx";
import Check from "../page/Main/Check";
import Coach from "../page/Main/Coach";
import CoachInfo from "../page/Main/Coach/Info";
import Event from "../page/Main/Event";
import EventInfo from "../page/Main/Event/Info";
import System from "../page/Main/System";
import Center from "../page/Main/System/Center";
import Config from "../page/Main/System/Config";
import Account from "../page/Main/System/Center/Account";
import Authority from "../page/Main/System/Center/Authority";
import Character from "../page/Main/System/Center/Character";
import Framework from "../page/Main/System/Center/Framework";
import Group from "../page/Main/System/Center/Group";
import Platform from "../page/Main/System/Platform";
import Approve from "../page/Main/Approve";
import ApproveEvent from "../page/Main/Approve/ApproveEvent";
import Notice from "../page/Notice";
import EventNotice from "../page/Notice/EventNotice";
import ApproveNotice from "../page/Notice/ApproveNotice";
import { InfoCircleOutlined, MailOutlined, PlusOutlined } from "@ant-design/icons";
import NoticeManage from "../page/Notice/NoticeManage";

const routes = [
    {
        path: "/",
        component: Main,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => <Redirect to="/athleteManage" />
            },
            {
                path: "/athleteManage",
                component: Athlete,
                auth: 'root',
                children: [
                    {
                        path: "/athleteManage",
                        exact: true,
                        render: () => <Redirect to="/athleteManage/info" />
                    },
                    {
                        path: '/athleteManage/info',
                        component: AthleteInfo,
                        icon: MailOutlined,
                        key: 'info',
                        content: '运动员信息表'
                    },
                    {
                        path: '/athleteManage/test',
                        component: Mqtest,
                        icon: PlusOutlined,
                        key: 'test',
                        content: '测试'
                    }
                ]
            },
            {
                path: "/eventManage",
                component: Event,
                auth: 'root',
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
                        key: 'info',
                        content: '比赛信息'
                    }
                ]
            },
            {
                path: "/coachInfo",
                component: Coach,
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
                        key: 'info',
                        content: '教练信息表'
                    }
                ]
            },
            {
                path: "/checkInfo",
                auth: 'root',
                component: Check,
            },
            {
                path: "/systemManage",
                auth: 'root',
                component: System,
                children: [
                    {
                        path: "/systemManage",
                        exact: true,
                        render: () => <Redirect to="/systemManage/config" />
                    },
                    {
                        path: "/systemManage/config",
                        component: Config
                    },
                    {
                        path: "/systemManage/center",
                        component: Center,
                        children: [
                            {
                                path: "/systemManage/center/framework",
                                exact: true,
                                component: Framework
                            },
                            {
                                path: "/systemManage/center/account",
                                exact: true,
                                component: Account
                            },
                            {
                                path: "/systemManage/center/character",
                                exact: true,
                                component: Character
                            },
                            {
                                path: "/systemManage/center/group",
                                exact: true,
                                component: Group
                            },
                            {
                                path: "/systemManage/center/authority",
                                exact: true,
                                component: Authority
                            },
                        ]
                    },
                    {
                        path: "/systemManage/platform",
                        component: Platform,
                    },
                ]
            },
            {
                path: "/approveManage",
                auth: 'root',
                component: Approve,
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
                        key: 'event',
                        content: '比赛审核'
                    }
                ]
            },
            {
                path: "/notice",
                auth: 'root',
                component: Notice,
                children: [
                    {
                        path: "/notice",
                        exact: true,
                        render: () => <Redirect to="/notice/event" />
                    },
                    {
                        path: "/notice/event",
                        exact: true,
                        component: EventNotice,
                        icon: InfoCircleOutlined,
                        key: 'event',
                        content: '比赛通知'
                    },
                    {
                        path: "/notice/approve",
                        exact: true,
                        component: ApproveNotice,
                        icon: InfoCircleOutlined,
                        key: 'approve',
                        content: '审核通知'
                    },
                    {
                        path: '/notice/manage',
                        exact: true,
                        component: NoticeManage,
                        icon: InfoCircleOutlined,
                        key: 'mannage',
                        content: '通知管理'
                    }
                ]
            }
        ]
    },
]

export default routes;