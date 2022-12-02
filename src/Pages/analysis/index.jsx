import { Box } from "@mui/material";
import Green from "images/green-drug.svg";
import Red from "images/red-drug.svg";
import AppBar from "Components/Appbar";
import ProfilCard from "Components/ProfilCard";
import Drugs from "Components/drugs";
import QRBar from "Components/QRBar";

export default function Analysis() {
  return (
    <Box>
      <Box sx={{ p: 2 }}>
        <AppBar />
        <Box sx={{ p: 3 }}>
          <ProfilCard />

          <Box
            sx={{
              mt: 5,
              display: "flex",
            }}
          >
            <Box sx={{ mr: 2 }}>
              <Drugs drug="Saroukh" img={Red} label="missed !" />
              <br />
              <Drugs drug="Saroukh" img={Red} label="missed !" />
            </Box>

            <Box>
              <Drugs
                drug="L’erica"
                img={Green}
                label="on time"
                bgcolor="rgba(61, 182, 187, 0.21)"
                border="1px solid #3DB6BB"
                color="#3DB6BB"
              />
              <br />
              <Drugs
                drug="L’erica"
                img={Green}
                label="on time"
                bgcolor="rgba(61, 182, 187, 0.21)"
                border="1px solid #3DB6BB"
                color="#3DB6BB"
              />
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
      <QRBar/>
    </Box>
  );
}
