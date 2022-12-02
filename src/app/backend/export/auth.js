import api from "app/backend";
// exporting auth hooks
export const {
    useSignInMutation,
    useSignUpMutation,
    useLogOutMutation,
    useGetUserDataMutation,
    useEditUserMutation,
    useCheckEmailMutation,
    useCheckPhoneMutation,
    useResetPasswordMutation,
    useCreateResetMutation,
    usePhoneAuthMutation,
} = api;
