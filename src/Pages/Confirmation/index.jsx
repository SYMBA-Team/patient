import { Avatar, Card, Box, CardContent, Grid, Link as MuiLink, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { usePhoneAuthMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { fontSize } from "@mui/system";

export default function Confirmation() {
    return (
        <Container component="main" maxWidth="md" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Card>
                    <CardContent sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Confirmation
                        </Typography>
                        <Auth
                            initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
                            useMutation={usePhoneAuthMutation}
                            validationSchema={Yup.object().shape({
                                password: Yup.string()
                                    .min(8, "Your password must have at least 8 charcters")
                                    .required("You have to provide a password"),
                            })}
                            inputs={[
                                
                                {
                                    margin: "normal",
                                    required: true,
                                    fullWidth: true,
                                    name: "password",
                                    label: "Phone Code",
                                    type: "text",
                                    id: "password",
                                    autoComplete: "current-password",
                                },
                            ]}
                        >
                            <Grid container sx={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                                <Typography sx={{ textAlign: "center", fontSize: ".8 em" }} >
                                    Confirm via SMS
                                </Typography>
                            </Grid>
                        </Auth>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}