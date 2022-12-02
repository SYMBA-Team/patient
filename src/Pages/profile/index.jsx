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

import GitBetter from "images/GitBetter.svg";
import humburger from "images/humburger.svg";
import QR from "images/QR.svg";
import { bgcolor } from "@mui/system";
import ProfilCard from "Components/ProfilCard";


export default function Profil(){
    return (
        
            <Container
             sx={{
                px:3,
               
             }}
            >
                <Box sx={{display: "flex", justifyContent:"space-between", pt: "1rem" }}>
              <Box  component="img" alt="Logo" src={humburger} sx={{width:"25.24px"}} ></Box>
              <Box component="img" alt="Logo" src={GitBetter} sx={{width:"101.41px"}}></Box>
              </Box>
               <ProfilCard  />
            
            </Container>
            
        
    )
}
