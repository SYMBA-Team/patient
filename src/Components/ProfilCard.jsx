import { StayPrimaryLandscape } from "@mui/icons-material";
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
import { borderRadius } from "@mui/system";
import { bgcolor } from "@mui/system";
import loader from "images/loader.svg";
import profilPic from "images/profil-pic.svg";

export default function ProfilCard (){
    return (
        <Card
        sx={{
            borderRadius: "10px",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.15)",
            bgcolor: "#F8F8F8",
            p: 2,
            mt: 8
        }}
       > 
       <Box 
        sx={{display: "flex",}}
       >
       <img 
          src={profilPic}
          
          ></img>
          <Box>
             <Typography sx={{px:2, fontSize: "16px", color: "primary.main",fontWeight:"bold"}}>Sofiane Hafsaoui</Typography>
             <Typography sx={{px:2, fontSize: "16px", color: "primary.main"}}>Status : Recovering</Typography>
             <Box 
             sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                px: 2,
                pt:1
                }}>
               <img src={loader} 
               ></img>
               <Typography sx={{fontSize: "13px", color: "primary.main"}}>65 % Complete</Typography>
             </Box>
          </Box>
       </Box>
          
          <Typography sx={{fontSize: 16, color: "primary.main", fontWeight:"bold", marginTop: "1rem", marginBottom:"1rem", }}>Up-coming Diognosis :</Typography>
          <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: "5px",
            py: 1,
            px:2
            
          }}
          >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
               
            }}>
              <Typography sx={{fontSize: "16px", color:"#FFFFFF"}} >13 Febrary 2023</Typography>
              <Typography sx={{fontSize: "10px", color:"#FFFFFF"}}>Hopital EL AZHAR, section B2</Typography>
            </Box>
            <Typography sx={{fontSize: "10px", marginTop: ".5rem", color:"#FFFFFF"}}>Doctor Mohamed MOUSSAOUI, Cardio-logue</Typography>
          </Box>
       </Card>
    )
}