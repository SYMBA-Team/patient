import {
    Container,
    Avatar,
    Card,
    Box,
    CardContent,
    Grid,
    Link as MuiLink,
    Typography,
  } from "@mui/material";
import ProfilPic from "images/profil-pic.svg";
import LoaderWhite from "images/loaderWhite.svg"
import { bgcolor } from "@mui/system";

export default function DiagnosisCard() {
  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent:"space-around",
        p: 4,
        bgcolor: "primary.main",
        borderBottomLeftRadius:15 ,
        borderBottomRightRadius:  15
      }}
      >
        <img src={ProfilPic} width= "98px "height= "97px"/>
        <Box sx={{mr: 8}}>
            <Typography sx={{fontSize: "16px", color:"#FFFFFF"}}>Sofiane Hafsaoui</Typography>
            <Typography sx={{fontSize: "14px", color:"#FFFFFF", mb:1}}>Status : Recovering</Typography>
            <Box sx={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                <img src={LoaderWhite} />
                <Typography sx={{fontSize: "10px", color:"#FFFFFF", ml:2}}>65 %  Setps <br /> Completed</Typography>
            </Box>
        </Box> 
      </Box>
    </>
  );
}
