import {
  Container,
  Avatar,
  Card,
  Box,
  CardContent,
  Grid,
  Link as MuiLink,
  Typography,
  Modal,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import GitBetter from "images/GitBetter.svg"
import Appbar from "Components/Appbar";
import ProfilCard from "Components/ProfilCard";


export default function Profil() {
  return (
    <Container
      sx={{
        px: 3,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", pt: "1rem" }}
      >
        <Appbar/>
        
        <Box
          component="img"
          alt="Logo"
          src={GitBetter}
          sx={{ width: "101.41px" }}
        ></Box>
      </Box>
      <ProfilCard />
      

    </Container>
  );
}
