import { createSlice } from "@reduxjs/toolkit";

const initState = {
    page: 0,
    registration: {
        personalInfo: { email: "", firstName: "", lastName: "", phone: "" },
        academicInfo: { university: "", major: "" },
        refrence: { knewFrom: { facebook: false, instagram: false, discord: false, friend: false, other: false } },
        professional: { portfolio: "", linkedIn: "", github: "", skills: [], otherOrganizations: "" },
        motivations: {
            whatKnow: "",
            expectations: "",
            motivation: "",
            explained: "",
            experience: false,
            events: false,
            trainings: false,
        },
    },
};
const initial_state = JSON.parse(localStorage.getItem("registration") || "null") || initState;

const registration = createSlice({
    name: "registration",
    initialState: initial_state,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        setPersonalInformation: (state, { payload }) => {
            state.registration.personalInfo = payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        setProfessionalInformation: (state, { payload }) => {
            state.registration.professional = payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        setAcademicInformation: (state, { payload }) => {
            state.registration.academicInfo = payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        setRefrence: (state, { payload }) => {
            state.registration.refrence = payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        setMotivations: (state, { payload }) => {
            state.registration.motivations = payload;
            localStorage.setItem("registration", JSON.stringify(state));
            return state;
        },
        initRegistration: (state) => {
            localStorage.removeItem("registration");

            return initState;
        },
    },
});

export const {
    setPage,
    initRegistration,
    setPersonalInformation,
    setProfessionalInformation,
    setAcademicInformation,
    setRefrence,
    setMotivations,
} = registration.actions;

export default registration.reducer;
