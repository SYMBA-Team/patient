import Card from "@mui/material/Card";
import { Typography, Box, Button } from "@mui/material";
import { palette } from "@mui/system";
import DateProfil from "./DateProfil";

export default function CardList({ List }) {
  return (
    <Card
      sx={{
        color: "primary.main",
        backgroundColor: "primary.main",
        marginTop: "2em",
        marginRight: "-1em",
        marginLeft: "-1em",
        padding: "1em",
        paddingBottom: "2em",
        paddingRight: "3em",
        paddingLeft: "3em",
        borderRadius: "15px",
      }}
    >
      <Typography sx={{ fontSize: "1.3em", margin: "auto", color: "white" }}>
        History of Visits :
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DateProfil num="01" month="sept." />
        <DateProfil selected num="26" month="oct." />
        <DateProfil num="11" month="oct." />
        <DateProfil num="02" month="nov." />
        <DateProfil num="22" month="nov." />
        <DateProfil num="15" month="nov." />
      </Box>
      {List.map((element, i) => (
        <Box key={i}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "12px",
              mb: 2,
              mt: 3,
              p:1
            }}
          >

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography sx={{
                color: "#55A5D9",
                fontSize: "16px",
                fontWeight:"bold"
                }}
                >{element.date}</Typography>
              <Box
                onClick={() => {
                  console.log("Reading more");
                }}
                sx={{
                  background: "rgba(176, 34, 243, 0.22)",
                  border: "0.651852px solid #B022F3",
                  borderRadius: "12px",
                  p:.3,
                  px:1
                }}
              >
                <Typography sx={{fontSize:"13px", color: "#B022F3"}}>Physical Analysis</Typography>
              </Box>
            </Box>

            <Typography sx={{
                fontSize: "10px",
                mb:1
            }}
            >{element.hospital}</Typography>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
              <Typography sx={{fontSize: "10px"}}>{element.doctor}</Typography>
              <Box
                onClick={() => {
                  console.log("Reading more");
                }}
                sx={{
                  bgcolor:"#3DB6BB",
                  borderRadius:"12px",
                  px:1
                }}
              >
                <Typography sx={{color:"white", fontCize:"10px"}}>Read More</Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      ))}
    </Card>
  );
}
