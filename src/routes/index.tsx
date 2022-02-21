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
                    },
                    {
                        path: '/athleteManage/test',
                        component: Mqtest,
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
                    }
                ]
            },
            {
                path: "/checkInfo",
                component: Check
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
            }
        ]
    },
]

export default routes;