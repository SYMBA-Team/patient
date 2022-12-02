import LogoSmall from "images/Logo-Small.png";
import burger from "images/burger.svg";
import { Box } from "@mui/material";
import {useState}from 'react'
import ProfileMenu from "./ProfileMenu.jsx";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Box component="img" src={burger} onClick={handleOpen} />
        <Box component="img" src={LogoSmall} />
      </Box>
      <ProfileMenu handleClose={handleClose} open={open} />
    </>
  );
}
