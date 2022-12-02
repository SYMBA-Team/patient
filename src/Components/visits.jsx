import { Box, Typography, Card } from "@mui/material";


export default function Visits (props){
    return (
        <Box sx={{
            p:2
        }}
        >
            <Typography sx={{mb:3}}>Type of Visit </Typography>
            <Box sx={{
                background: "rgba(243, 97, 34, 0.22)",
                border: "1px solid #F36122",
                borderRadius:" 8px",
                width: "61px",
                height: "32px",
                textAlign: "center"
            }}>
                {props.text}
            </Box>
        </Box>
    )
}