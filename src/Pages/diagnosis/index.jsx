import { Box, Typography, Card } from "@mui/material";
import Burger from "images/burger.svg";
import Logo from "images/Logo-Small.png";
import DiagnosisCard from "Components/DiagnosisCard";
import Visits from "Components/visits";

export default function Diagnosis() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 4,
        }}
      >
        <img src={Burger} alt="burger" />
        <img src={Logo} alt="logo"/>
      </Box>
      <DiagnosisCard />
      <Typography
      sx={{
        color:"#55A5D9",
        fontSize:"25",
        mt:4,
        pl:2,
        fontWeight: "bold",
        mb:2
      }} 
      >Diognosis Info </Typography>
      <Card sx={{
        m:2,
        borderRadius: "12px",
        bgcolor:"#E8F6FF"
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m:2,
          }}
        >
          <Box>
            <Typography sx={{color: "#000000", mb:2}}>
              <span style={{fontWeight: "bold"}}>Date</span> <br /> 15 aug 2022
            </Typography>
            <Typography sx={{
            }}
            >
              <span style={{fontWeight: "bold"}}>Hospital</span> <br /> Bouzeri3a mor dora
            </Typography>
          </Box>
          <Box>
            <Typography>
              <span style={{fontWeight: "bold"}}>Doctor</span> <br /> Alla eddine rakik
            </Typography>
          </Box>
        </Box>
      </Card>
      <Visits/>
    </>
  );
}
