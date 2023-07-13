import { styled } from "@mui/material";

export const StyledModalContainer = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "#fff",
  border: "2px solid #9c27b0",
  boxShadow: "24px",
  borderRadius: "8px",
  padding: "20px",
  "&:focus-visible": {
    border: "2px solid #9c27b0",
  },
});
