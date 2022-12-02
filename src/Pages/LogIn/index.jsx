import { Container, Card, Box, CardContent } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GitBetter from "images/GitBetter.svg";
import TopCurve from "images/top_curve.svg";
import BottomCurve from "images/bottom_curve.svg";
import Med from "images/med.svg";
import { useSignInMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";

export default function LogIn() {
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                padding: 0,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
            }}
        >
            <Box component="img" alt="Logo" sx={{ width: "100%" }} src={TopCurve} />

            <Box component="img" alt="Logo" sx={{}} src={GitBetter} />

            <Box
                sx={{
                    marginTop: 4,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Card>
                    <CardContent
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        {/* <Typography component="h1" variant="h5">
                            Sign in 
                        </Typography> */}
                        <Auth
                            initialValues={{ email: "", password: "" }}
                            useMutation={useSignInMutation}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email("You have to provide a valid email address")
                                    .required("You have to provide an email address"),
                                password: Yup.string().required("You have to provide a password"),
                            })}
                            inputs={[
                                {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    id: "email",
                                    label: "Email Address",
                                    name: "email",
                                    autoComplete: "email",
                                    autoFocus: true,
                                    outline: "theme.primary",
                                },
                                {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    name: "password",
                                    label: "Password",
                                    type: "password",
                                    id: "password",
                                    autoComplete: "current-password",
                                    outline: "theme.secondary",
                                },
                            ]}
                            sx={{ maxWidth: "100%" }}
                        >
                            {/* <Grid container>
                                <Grid item xs>
                                    <MuiLink component={Link} to="/recover" variant="body2">
                                        Forgot password?
                                    </MuiLink>
                                </Grid>
                                <Grid item>
                                    <MuiLink component={Link} to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </MuiLink>
                                </Grid>
                            </Grid> */}
                        </Auth>
                    </CardContent>
                </Card>
            </Box>
            <Box component="img" alt="Logo" src={Med} />

            <Box
                component="img"
                alt="Logo"
                sx={{ position: "absolute", bottom: "0", width: "100%" }}
                src={BottomCurve}
            />
        </Container>
    );
}
