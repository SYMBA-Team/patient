export default function auth(builder) {
    return {
        /* Sign In */
        signIn: builder.mutation({
            query: ({ body }) => ({
                url: "/signin",
                method: "POST",
                body,
            }),
        }),
        /* Sign Up / Register */
        signUp: builder.mutation({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }),
        /* phone 2othAuth */
        phoneAuth: builder.mutation({
            query: (password) => ({
                url: "/signup",
                method: "POST",
                body: { password },
            }),
        }),
        /* Log out */
        logOut: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
        /* Get User Data */
        getUserData: builder.mutation({
            query: () => ({ url: "/", method: "GET" }),
        }),
        /* Edit User Data */
        editUser: builder.mutation({
            query: (body) => ({ url: "/user", method: "PUT", body }),
        }),
        checkEmail: builder.mutation({
            query: (email) => ({
                url: "/email",
                method: "POST",
                body: { email },
            }),
        }),
        checkPhone: builder.mutation({
            query: (phone) => ({
                url: "/phone",
                method: "POST",
                body: { phone },
            }),
        }),

        resetPassword: builder.mutation({
            query: ({ id, body }) => ({
                url: "/recover/" + id,
                method: "POST",
                body,
            }),
        }),
        createReset: builder.mutation({
            query: (body) => ({
                url: "/recover/",
                method: "POST",
                body,
            }),
        }),
    };
}
