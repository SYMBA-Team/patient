import { useUser } from "hooks";
import Error404 from "Pages/Errors/Error404";
import Home from "Pages/Home";
import LogIn from "Pages/LogIn";
import SignUp from "Pages/SignUp";
import { Navigate, useRoutes } from "react-router-dom";

const Router = () => {
    const { user } = useUser();
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: user ? <Navigate to="/admin" /> : <LogIn />,
        },
        {
            path: "/signup",
            element: user ? <Navigate to="/admin" /> : <SignUp />,
        },
        {
            path: "/admin",
            element: user ? <Error404 /> : <Navigate to="/login" />,
        },
        {
            path: "*",
            element: <Error404 />,
        },
    ]);
};
export default Router;
