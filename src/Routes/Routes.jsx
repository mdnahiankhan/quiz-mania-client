import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Quez from "../Pages/Quez/Quez";
import Addquiz from "../Pages/AddQuiz/Addquiz";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import ShowAnswer from "../Layout/DashBoardLayout/ShowAnswer/ShowAnswer";
import Allusers from "../Layout/DashBoardLayout/Alluser/Allusers";
import AdminRoutes from "./AdminRoutes/AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoutes><Home></Home></PrivateRoutes>
            },
            {
                path: '/quiz',
                element: <PrivateRoutes><Quez></Quez></PrivateRoutes>
            },
            {
                path: '/addquiz',
                element: <PrivateRoutes><Addquiz></Addquiz></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <ShowAnswer></ShowAnswer>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            }
        ]
    }

])

export default router;