import {
  Container,
  Box,
} from "@mui/material";
import Appbar from "Components/Appbar";
import ProfilCard from "Components/ProfilCard";
import CardList from "Components/CardList";
import QRBar from "Components/QRBar";

export default function Profil() {
  return (
    <Box>
      <Container
        sx={{
          px: 3,
        }}
      >
        <Appbar />
        <ProfilCard />
        <CardList
          List={[
            {
              date: "21 November 2022",
              hospital: "Hopital EL AZHAR, section B2",
              doctor: "Doctor Mohamed MOUSSAOUI",
            },
            {
              date: "21 November 2022",
              hospital: "Hopital EL AZHAR, section B2",
              doctor: "Doctor Mohamed MOUSSAOUI",
            },
            {
              date: "21 November 2022",
              hospital: "Hopital EL AZHAR, section B2",
              doctor: "Doctor Mohamed MOUSSAOUI",
            },
          ]}
        ></CardList>
      </Container>
      <QRBar />
    </Box>
  );
}
