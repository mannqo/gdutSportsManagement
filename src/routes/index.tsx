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
import Account from "../page/Main/System/Config/Account";
import Authority from "../page/Main/System/Config/Authority";
import Character from "../page/Main/System/Config/Character";
import Framework from "../page/Main/System/Config/Framework";
import Group from "../page/Main/System/Config/Group";
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
                        component: Config,
                        children: [
                            {
                                path: "/systemManage/config/framework",
                                exact: true,
                                component: Framework
                            },
                            {
                                path: "/systemManage/config/account",
                                exact: true,
                                component: Account
                            },
                            {
                                path: "/systemManage/config/character",
                                exact: true,
                                component: Character
                            },
                            {
                                path: "/systemManage/config/group",
                                exact: true,
                                component: Group
                            },
                            {
                                path: "/systemManage/config/authority",
                                exact: true,
                                component: Authority
                            },
                        ]
                    },
                    {
                        path: "/systemManage/center",
                        component: Center,
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