import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            <Box sx={{ mt: 30 }}>
                <Typography component="body1" variant="h5" align="center">
                    we are sorry, we will try to fix this issue soon.
                </Typography>
                <Typography component="h1" variant="h1" align="center" sx={{ fontSize: "10rem" }}>
                    Something went wrong
                </Typography>
            </Box>
            <Button component={Link} to="/" variant="contained" size="large" sx={{ mx: "auto" }}>
                Go back home
            </Button>
        </>
    );
}
