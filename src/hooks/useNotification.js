import { addNotification, removeNotification, initNotification } from "app/context/notifications";
import { useAppDispatch, useAppSelector } from "./redux";

const useNotification = () => {
    const dispatch = useAppDispatch();
    return {
        Notify: (
            title,
            description,
            { kind = "success", timeOut = 5000 } = {
                kind: "success",
                timeOut: 5000,
            }
        ) => {
            const notification = { id: Date.now() + "", title, description, kind, timeOut };
            dispatch(
                addNotification({
                    key: notification.id,
                    notification,
                })
            );
        },
        notifications: useAppSelector((state) => state.notifications),
        closeNotification: (id) => {
            // @ts-ignore
            dispatch(removeNotification(id));
        },
        emptyNotifications: (id) => {
            // @ts-ignore
            dispatch(initNotification());
        },
        Errofy: (err, timeOut = 10000) => {
            err = err.data ? err.data : err;
            console.log({ err });
            const notification = {
                id: Date.now() + "",
                title: err.Name ?? "Unknown Error",
                description: err.message ?? "Please try again",
                kind: "error",
                timeOut,
            };
            dispatch(addNotification({ key: notification.id, notification }));
        },
    };
};
export default useNotification;
