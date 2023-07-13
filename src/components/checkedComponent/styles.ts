import { styled } from "@mui/material";

interface IStyledContainer {
  checked: boolean;
}

export const StyledContainer = styled("div")((props: IStyledContainer) => ({
  borderBottom: !props.checked ? "2px solid red" : "2px solid green",
  backgroundColor: !props.checked
    ? "rgba(220, 20, 60, 0.1)"
    : "rgba(39, 186, 26, 0.1)",
  position: "relative",
  display: "inline-block",
}));

export const StyledSpan = styled("span")({
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  width: "120px",
  minWidth: "min-content",
  backgroundColor: "white",
  color: "black",
  textAlign: "center",
  padding: "5px 0",
  borderRadius: "10px",
  fontWeight: "bold",
  position: "absolute",
  zIndex: 1,
  bottom: "125%",
  left: "50%",
  marginLeft: "-60px",
  transition: "opacity 0.3s",
});

export const StyledList = styled("ul")({
  listStyle: "none",
  paddingLeft: 0,
});

export const StyledListItem = styled("li")({
  padding: "5px 10px",
  "&:hover": {
    color: "white",
    backgroundColor: "#2cb673",
    cursor: "pointer",
  },
});
