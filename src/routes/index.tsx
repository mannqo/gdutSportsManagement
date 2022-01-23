import { Redirect } from "react-router-dom";
import Main from "../page/Main";
import Athlete from "../page/Main/Athlete";
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
                exact: true,
                component: Athlete,
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