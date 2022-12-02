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

import GitBetter from "../../GitBetter.svg";
import humburger from "humburger.svg";
import loader from "../../loader.svg";
import profilPic from "../../profil-pic.svg";
import QR from "../../QR.svg";
import { bgcolor } from "@mui/system";


export default function Profil(){
    return (
        <Container 
        component="main"
        maxWidth="md"
        sx={{
           p: "0.8rem"
        }}
        >
            <Box sx={{display: "flex", justifyContent:"space-between", pt: "1rem" }}>
              <Box  component="img" alt="Logo" src={humburger} sx={{width:"25.24px"}} ></Box>
              <Box component="img" alt="Logo" src={GitBetter} sx={{width:"101.41px"}}></Box>
            </Box>

            <Card
             sx={{
                p: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "background.default",
                maxWidth:"100%",
                maxHeight:"30%"
              }}
            >

            </Card>
        </Container>
    )
}
