import { Typography, Box } from "@mui/material";

export default function DateProfil(props) {
  return (
    <Box
      sx={
        props.selected
          ? {
              borderRadius: "10px",
              background:
                "linear-gradient(165.08deg, #45CCD2 -7.49%, #4464D8 101.46%);",
                width: "42px",
                height: "49px",
                mt: 2
                
            }
          : {mt:2}
      }
    >
      <Typography variant="body1" sx={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        {props.num}
      </Typography>
      <Typography variant="body1" sx={{ color: "white", fontSize: "15px", textAlign: "center"}}>
        {props.month}
      </Typography>
    </Box>
  );
}
