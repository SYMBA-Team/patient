import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#82b3fd",
        },
        secondary: {
            main: "#fff",
            contrastText: "#000",
        },
        background: {
            default: "#011728",
            paper: "#122136",
        },
    },
    typography: {
        fontFamily: '"Core Sans C", sans-serif',
    },
});
