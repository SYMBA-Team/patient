import { useAppDispatch, useAppSelector } from "hooks/redux";
import { removeUser, setUser } from "app/context/user";

const useUser = () => {
    const dispatch = useAppDispatch(),
        user = useAppSelector((state) => state.user),
        set = (user) => {
            dispatch(setUser(user));
        },
        remove = () => {
            dispatch(removeUser());
        };
    return { setUser: set, user, removeUser: remove };
};
export default useUser;
