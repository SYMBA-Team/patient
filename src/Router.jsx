import { useUser } from "hooks";
import Error500 from "Pages/Errors/Error500";
import Confirmation from "Pages/Confirmation";
import Home from "Pages/Home";
import LogIn from "Pages/LogIn";
import SignUp from "Pages/SignUp";
import Profil from "Pages/profile";
import { Navigate, useRoutes } from "react-router-dom";

const Router = () => {
    const { user } = useUser();
    return useRoutes([
        {
            path: "/",
            element: user ? <Navigate to="/home" /> : <LogIn />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/signup",
            element: user ? <Navigate to="/home" /> : <SignUp />,
        },
        {
            path: "/profil",
            element: user ? <Navigate to="/admin" /> : <Profil />,
        },
        {
            path: "/confirmation",
            element: user ? <Navigate to="/admin" /> : <Confirmation />,
        },
        {
            path: "*",
            element: <Error500 />,
        },
    ]);
};
export default Router;
