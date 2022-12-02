import { useUser } from "hooks";
import Error500 from "Pages/Errors/Error500";
import Confirmation from "Pages/Confirmation";
import Home from "Pages/Home";
import LogIn from "Pages/LogIn";
import SignUp from "Pages/SignUp";
import Profil from "Pages/profile";
import Landing from "Pages/Landing/Landing"
import { Navigate, useRoutes } from "react-router-dom";
import TestPage from "Pages/TestPage";
import Diagnosis from "Pages/diagnosis";
import DiagnosisInfo from "Pages/DiagnosisInfo";

const Router = () => {
    const { user } = useUser();
    return useRoutes([
        {
            path: "/test",
            element: <TestPage />,
        },
        {
            path: "/login",
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
            path: "/Diagnosis",
            element: <Diagnosis />,
        },
        {
            path: "/DiagnosisInfo",
            element: <DiagnosisInfo />,
        },
        {
            path: "*",
            element: <Error500 />,
        },
    ]);
};
export default Router;
