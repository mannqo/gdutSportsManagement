import { Redirect } from "react-router-dom";
import Main from "../page/Main";
import Athlete from "../page/Main/Athlete";
import Info from "../page/Main/Athlete/Info";
import Mqtest from "../page/Main/Athlete/xxx";
import Check from "../page/Main/Check";
import Coach from "../page/Main/Coach";
import Event from "../page/Main/Event";

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
                        component: Info,
                    },
                    {
                        path: '/athleteManage/test',
                        component: Mqtest,
                    }
                ]
            },
            {
                path: "/eventManage",
                exact: true,
                component: Event
            },
            {
                path: "/coachInfo",
                exact: true,
                component: Coach
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