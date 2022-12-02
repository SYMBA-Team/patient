import { Box, Typography } from "@mui/material";

export default function Drugs({
  color = "#FF844F",
  bgcolor = "rgba(255, 132, 79, 0.21)",
  border = " 1px solid #FF844F",
  drug,
  label,
  img,
}) {
  return (
      <Box
        sx={{
          border: "1px solid #F0F0F0",
          width: "148px",
          p: 1,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{drug}</Typography>
          <Typography sx={{ color, fontSize: "8px" }}>3 x Day</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <img src={img} alt="img" width="20px" />
          <Box
            sx={{
              width: "45.13px",
              height: "12.14px",
              bgcolor,
              border,
              borderRadius: "12px",
              fontSize: "8px",
              color,
              textAlign: "center",
              ml: "auto",
              pb: 1.5,
            }}
          >
            {label}
          </Box>
        </Box>
      </Box>
  );
}
