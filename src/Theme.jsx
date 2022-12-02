import { createTheme } from "@mui/material/styles";
import "@fontsource/jost";

export const theme = createTheme({
 
    palette: {
        radius:"100px",
        mode: "light",
        primary: {
            main: "#55A5D9",
        },
        secondary: {
            main: "#45CCD2",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: '"Jost", sans-serif',
    },
});
