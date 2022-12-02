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
        <Box
          key={i}
          sx={{
            background: "white",
            padding: "1em",
            borderRadius: "15px",
            marginTop: "1em",
            display: "flex"
          }}
        >
          <Box>
            {" "}
            <Typography
              sx={{ fontWeight: "600", fontSize: "16px" }}
              align="left"
            >
              {element.date}
            </Typography>
            <Typography sx={{ fontSize: "8px", margin: "auto" }}>
              {element.hospital}
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                marginBottom: "1em",
                fontSize: "0.5em",
              }}
            >
              {element.doctor}
            </Typography>
          </Box>
          <Box sx={{}}>
          <Button
              sx={{
                borderRadius: "10px",
                marginRight: "0.01em",
                backgroundColor: "rgba(176, 34, 243, 0.22)",
                color:"#B022F3",
                padding: "3em",
                paddingTop: "0.3em",
                paddingBottom: "0.3em",
                fontSize: "14px",
                border: "0.651852px solid #B022F3"
              }}
              onClick={() => {
                console.log("Reading more");
              }}
            >
              {" "}
              <Typography sx={{ color: "#B022F3", fontSize:"14px" }}>Physical Analysis</Typography>{" "}
            </Button>
            <Button
              sx={{
                borderRadius: "10px",
                marginRight: "0.01em",
                backgroundColor: "secondary.main",
                padding: "3em",
                paddingTop: "0.3em",
                paddingBottom: "0.3em",
                fontSize: "0.3em",
              }}
              onClick={() => {
                console.log("Reading more");
              }}
            >
              {" "}
              <Typography sx={{ color: "white" }}>Read More</Typography>{" "}
            </Button>
          </Box>
        </Box>
      ))}
    </Card>
  );
}
