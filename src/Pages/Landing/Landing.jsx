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

import { useSignInMutation } from "app/backend/export/auth";
import Auth from "Components/Auth";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { bgcolor } from "@mui/system";
import Appbar from "Components/Appbar";
import CardList from "Components/CardList";
import ProfilCard from "Components/ProfilCard";

export default function Landing() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
     

        flexDirection: "column",
        maxHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Appbar></Appbar>
      <ProfilCard></ProfilCard>
      <CardList
        List={[
          {
            date: "21 November 2022",
            hospital: "Hopital EL AZHAR, section B2",
            doctor: "Doctor Mohamed MOUSSAOUI, Cardio-logue",
          },
          {
            date: "21 November 2022",
            hospital: "Hopital EL AZHAR, section B2",
            doctor: "Doctor Mohamed MOUSSAOUI, Cardio-logue",
          },
          {
            date: "21 November 2022",
            hospital: "Hopital EL AZHAR, section B2",
            doctor: "Doctor Mohamed MOUSSAOUI, Cardio-logue",
          },
        ]}
      ></CardList>
    </Container>
  );
}
