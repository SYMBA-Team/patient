import { configureStore } from "@reduxjs/toolkit";
import Api from "./backend";
import user from "./context/user";
import registration from "./context/registration";
import notifications from "./context/notifications";
export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        user,
        registration,
        notifications,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
});
