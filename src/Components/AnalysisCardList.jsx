import Card from "@mui/material/Card";
import { Typography, Box, Button } from "@mui/material";
import { palette } from "@mui/system";
import DateProfil from "./DateProfil";

export default function AnalysisCardList({ List }) {
  return (
     
    <Box
      sx={{
        backgroundColor: "background.main",
        height:"300px",
        width:"430px",
        marginTop: "0.5em",
        marginRight: "-1em",
        marginLeft: "-1em",
        padding:"1em",
        paddingBottom:"2em",
        paddingRight:"3em",paddingLeft:"3em",borderRadius:"15px"
        
      }}
    >
      {List.map((element,i) => (
        <Card 
        key={i}
        sx={{
            width:"100%",
            minHeight:"20%",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            mb:5,
            backgroundColor:"#F9F9FB"
    }}
        >
        <Typography sx={{fontWeight:"bold",paddingLeft:"1.2em"}} component="h1" >{element.medecin  }
        {element.added !== ""? <><br/> <span>{element.added}</span></>:""}  </Typography>
        <Typography sx={{fontWeight:"bold",color:element.text}} component="h1" >{element.number}</Typography>
        <Typography sx={{fontWeight:"1.2em",paddingRight:"1.2em"
        ,color:"#DBDEE5"}} component="h2" >{element.amount}</Typography>
        </Card>
      ))}
    </Box>
  );
}
