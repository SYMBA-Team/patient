
import LogoSmall from "images/Logo-Small.png";
import burger from "images/burger.svg"
import {Box} from "@mui/material";
export default function AppBar()
{
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Box
        component="img"
        src={burger}
        onClick={() => {
          console.log("first");
        }}
      />
      <Box component="img" src={LogoSmall} />
    </Box>
  );
}
