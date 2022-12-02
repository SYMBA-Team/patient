import {
  Container,
  Avatar,
  Card,
  Box,
  CardContent,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GitBetter from "../../GitBetter.svg";
import TopCurve from "../../top_curve.svg";
import BottomCurve from "../../bottom_curve.svg";
import { useSignInMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { bgcolor } from "@mui/system";

export default function LogIn() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box component="img" alt="Logo" sx={{}} src={TopCurve} />

      <Box component="img" alt="Logo" sx={{}} src={GitBetter} />

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: "86%", maxHeight: "40%" }}>
          <CardContent
            sx={{
              p: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.default",
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
                password: Yup.string().required(
                  "You have to provide a password"
                ),
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
      <Box component="img" alt="Logo" sx={{}} src={BottomCurve} />
    </Container>
  );
}
