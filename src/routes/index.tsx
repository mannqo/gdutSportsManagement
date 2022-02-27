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
import Audit from "../page/Main/Audit";
import AuditEvent from "../page/Main/Audit/AuditEvent";
import Notice from "../page/Notice";
import EventNotice from "../page/Notice/EventNotice";
import AuditNotice from "../page/Notice/AuditNotice";
import { InfoCircleOutlined, MailOutlined, PlusOutlined } from "@ant-design/icons";

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
                component: Check,
            },
            {
                path: "/systemManage",
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
                path: "/auditManage",
                component: Audit,
                children: [
                    {
                        path: "/auditManage",
                        exact: true,
                        render: () => <Redirect to="/auditManage/event" />
                    },
                    {
                        path: "/auditManage/event",
                        exact: true,
                        component: AuditEvent,
                        icon: MailOutlined,
                        key: 'event',
                        content: '比赛审核'
                    }
                ]
            },
            {
                path: "/notice",
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
                        path: "/notice/audit",
                        exact: true,
                        component: AuditNotice,
                        icon: InfoCircleOutlined,
                        key: 'audit',
                        content: '审核通知'
                    }
                ]
            }
        ]
    },
]

export default routes;