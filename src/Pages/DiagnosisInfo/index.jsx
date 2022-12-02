import { Box, Typography} from "@mui/material";
import Burger from "images/burger.svg";
import Logo from "images/Logo-Small.png";
import DiagnosisCard from "Components/DiagnosisCard";
import AnalysisCardList from "Components/AnalysisCardList";

export default function DiagnosisInfo() {

   let List=[
        {
          medecin: "Guicos",
          number: 93,
          amount: "65-99 md/dl",
          text:"black"
        },
        {
            medecin: "Bun",
            number: 7,
            amount: "6-20 md/dl",
            text:"#E96D68",
          },
          {
            medecin: "Bun",
            added:"/ Creatine Ration",
            number: 22.5,
            amount: "9-23 md/dl",
            text:"#E96D68",
          },
          {
            medecin: "CarbonDixide",
            number: 22,
            amount: "20-29 md/dl",
            text:"#109CF1",
          },
          {
            medecin: "Guicos",
            number: 93,
            amount: "65-99 md/dl",
            text:"black",
          },
          {
              medecin: "Bun",
              number: 7,
              amount: "6-20 md/dl",
              text:"#E96D68",
            },
            {
              medecin: "Bun",
              added:"/ Creatine Ration",
              number: 22.5,
              amount: "9-23 md/dl",
              text:"#E96D68",
            },
            {
              medecin: "Carbon Dixide",
              number: 22,
              amount: "20-29 md/dl",
              text:"#109CF1",
            },
            {
                medecin: "Bun",
                number: 7,
                amount: "6-20 md/dl",
                text:"#E96D68",
              },
      ]
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
        <img src={Logo} alt="logo" />
      </Box>
      <DiagnosisCard />
      <Typography
      component="h1"
      sx={{
        color:"#55A5D9",
        fontSize:"2em",
        mt:4,
        pl:2,
        fontWeight: "500",
        mb:2
      }} 
      >Analysis Codes </Typography>
        <Box 
         sx={{minHeight:"60%"}}
         >
        <AnalysisCardList List={List} />
        </Box>
    </>
  );
}
