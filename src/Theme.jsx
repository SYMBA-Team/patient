import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#55A5D9",
        },
        secondary: {
            main: "#45CCD2",
            contrastText: "#000",
        },
        background: {
            default: "#fff",
            paper: "#122136",
        },
    },
    typography: {
        fontFamily: '"Core Sans C", sans-serif',
    },
});
