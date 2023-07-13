import { styled, alpha } from "@mui/material";
import InputBase from "@mui/material/InputBase";

export const NavbarContainer = styled("div")({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-end",
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const StyledList = styled("ul")({
  listStyleType: "none",
  marginBlock: 0,
  paddingInlineStart: 0,
});

export const StyledSearchContainer = styled("div")({
  position: "absolute",
  top: "150%",
  color: "black",
  width: "100%",
  border: "2px solid #9c27b0",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  zIndex: 1,
});

export const StyledListItem = styled("li")({
  marginBlock: "1rem",
  padding: "0.5rem",
  borderRadius: "8px",
  border: "2px solid transparent",
  cursor: "pointer",
  "&:hover": {
    border: "2px solid #9c27b0",
  },
});
