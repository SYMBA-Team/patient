import { Box, Typography, Card } from "@mui/material";
import { Container } from "@mui/system";
import QRBar from "./QRBar";

export default function Visits() {
  return (
    <Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography sx={{ mb: 2, fontWeight: "bold" }}>
          Type of Visit{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              background: "rgba(243, 97, 34, 0.22)",
              border: "1px solid #F36122",
              borderRadius: " 8px",
              width: "61px",
              height: "32px",
              textAlign: "center",
              color: "#F36122",
              mr: 2,
            }}
          >
            x-ray
          </Box>

          <Box
            sx={{
              background: "rgba(176, 34, 243, 0.22)",
              border: "1px solid #B022F3",
              borderRadius: " 8px",
              width: "135px",
              height: "32px",
              textAlign: "center",
              color: "#B022F3",
            }}
          >
            Physical Analysis
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(243, 210, 34, 0.22)",
            border: "1px solid #F3D222",
            borderRadius: " 8px",
            width: "135px",
            height: "32px",
            textAlign: "center",
            color: "#F3D222",
            mt: 2,
            mb: 1,
          }}
        >
          Doctor Diagnosis
        </Box>

        <Typography sx={{ fontWeight: "bold" }}>
          Included Medication{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              background: "rgba(34, 130, 243, 0.22)",
              border: "1px solid #2282F3",
              borderRadius: " 8px",
              width: "85px",
              height: "32px",
              textAlign: "center",
              color: "#2282F3",
              mt: 2,
              mr: 2,
            }}
          >
            2x Saroukh
          </Box>

          <Box
            sx={{
              background: "rgba(34, 130, 243, 0.22)",
              border: "1px solid #2282F3",
              borderRadius: " 8px",
              width: "85px",
              height: "32px",
              textAlign: "center",
              color: "#2282F3",
              mt: 2,
            }}
          >
            3x Erica
          </Box>
        </Box>

        <Typography sx={{ fontWeight: "bold" }}>
          Included Medication{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              background: "rgba(34, 130, 243, 0.22)",
              border: "1px solid #2282F3",
              borderRadius: " 8px",
              width: "85px",
              height: "32px",
              textAlign: "center",
              color: "#2282F3",
              mt: 2,
              mr: 2,
            }}
          >
            2x Saroukh
          </Box>

          <Box
            sx={{
              background: "rgba(34, 130, 243, 0.22)",
              border: "1px solid #2282F3",
              borderRadius: " 8px",
              width: "85px",
              height: "32px",
              textAlign: "center",
              color: "#2282F3",
              mt: 2,
            }}
          >
            3x Erica
          </Box>
        </Box>
      </Box>
      <QRBar/>
    </Box>
  );
}
