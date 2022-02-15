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
                exact: true,
                component: Check
            },
        ]
    },
]

export default routes;