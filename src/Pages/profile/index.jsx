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
import CardList from "Components/CardList";


export default function Profil() {
  return (
    <Container
      sx={{
        px: 3,
      }}
    >
      
        <Appbar/>
   
      <ProfilCard />
      <CardList List={[{date:"21 November 2022",hospital:"Hopital EL AZHAR, section B2",doctor:"Doctor Mohamed MOUSSAOUI, Cardio-logue"}]}/>

    </Container>
  );
}
