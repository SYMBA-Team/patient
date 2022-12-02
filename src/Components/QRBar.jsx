import { Box } from "@mui/material";
import QRIcon from "images/QRIcon.svg";
import QRcode from "images/QRcode.png";
import { useState } from "react";
import { theme } from "Theme";
import { height } from "@mui/system";
export default function QRBar() {
  const [value, SetValue] = useState(false);
  function OnQRClick() {
    SetValue(!value);
  }
  return (
    <Box
      sx={{bgcolor:"white",
        height: value ? "80vh" : "12vh",
        boxShadow: "0px -8px 10px 1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        bottom: "0",
        width: "100vw",
        margin: "auto",
        transition: (theme) =>
          theme.transitions.create("height", {
            duration: "1000ms",
          }),
      }}
    >
      <Box
        onClick={OnQRClick}
        sx={{
          backgroundColor: "secondary.main",
          height: "60%",
          height: value ? "2%" : "0%",
          width: "15%",
          margin: "auto",
          marginTop: "1em",
          borderRadius: "15px",
          transition: (theme) =>
            theme.transitions.create("height", {
              duration: "500ms",
            }),
        }}
      ></Box>

      <Box
        onClick={value ? () => {} : OnQRClick}
        sx={{
          boxShadow: "rgba(0, 0, 0, 0)",
          height: "60%" ,
          margin: "auto",
          marginTop: value ? "0%" : "auto",
        }}
        component="img"
        src={QRIcon}
      ></Box>
    </Box>
  );
}
