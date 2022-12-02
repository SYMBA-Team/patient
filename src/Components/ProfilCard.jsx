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
            
            width: "321px", 
            height: "234px",
            p: 2
        }}
       > 
       <Box 
        sx={{display: "flex",}}
       >
       <img 
          src={profilPic}
          width="98px"
          height="97px"
          ></img>
          <Box>
             <Typography sx={{px:2, fontSize: "16px", color: "primary.main"}}>Sofiane Hafsaoui</Typography>
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
               <Typography 
               >65 % Complete</Typography>
             </Box>
          </Box>
       </Box>
          
          <Typography sx={{fontSize: 16, color: "primary.main", fontWeight:500, marginTop: "1rem"}}>Up-coming Diognosis :</Typography>
          <Box
          sx={{
          }}
          >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
              <Typography >13 Febrary 2023</Typography>
              <Typography>Hopital EL AZHAR, section B2</Typography>
            </Box>
            <Typography>Doctor Mohamed MOUSSAOUI, Cardio-logue</Typography>
          </Box>
       </Card>
    )
}