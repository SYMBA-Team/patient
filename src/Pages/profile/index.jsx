import {
  Container,
  Avatar,
  Card,
  Box,
  CardContent,
  Grid,
  Link as MuiLink,
  Typography,
  Modal,
  Divider,
  List,
  ListItem,
} from "@mui/material";

import * as React from "react";
import GitBetter from "images/GitBetter.svg";
import humburger from "images/humburger.svg";
import QR from "images/QR.svg";
import { bgcolor } from "@mui/system";
import ProfilCard from "Components/ProfilCard";
import profilPic from "images/profil-pic.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const style = {
  position: "absolute",
  width: "80%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#ffff",
  borderRadius: "18px",
  outLine: "none",
  pb: 4,
  px:4,
  display: "flex",
  flexDirection: "column",
};

export default function Profil() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container
      sx={{
        px: 3,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", pt: "1rem" }}
      >
        <Box
          component="img"
          alt="Logo"
          src={humburger}
          sx={{ width: "25.24px" }}
          onClick={handleOpen}
        ></Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={GitBetter} width="50%" style={{margin: "auto", pt: 2}} />
            <Box>
              <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
              }} 
              >
              <img src={profilPic} width="45.33px" height="45.33px" />
              <Box 
                sx={{
                    ml: 2,
                }}
              >
                <Typography sx={{fontSize:18, fontWeight: "bold"}}>Sofiane Hafsaoui</Typography>
                <Typography sx={{fontSize:15, color:"#333333B2"}}>Hospital EL AZHAR</Typography>
              </Box>
              </Box>
              <Divider />
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[
                    {
                        icon: PersonOutlinedIcon ,
                        text: "Profile"

                    },
                    {
                        icon: HistoryOutlinedIcon ,
                        text: "History"

                    },
                    {
                        icon: FolderOutlinedIcon ,
                        text: "Prescriptions"

                    }
                ].map((value) => (
                  <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                      <>
                        <IconButton aria-label="comment">
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <value.icon sx={{mr:2}}/>
                    <ListItemText primary={value.text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box sx={{
                display:"flex",
                alignItems: "center",
                marginTop: 2
                }}>
                 <LogoutOutlinedIcon/>
                 <Typography>Logout</Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Box
          component="img"
          alt="Logo"
          src={GitBetter}
          sx={{ width: "101.41px" }}
        ></Box>
      </Box>
      <ProfilCard />
    </Container>
  );
}
