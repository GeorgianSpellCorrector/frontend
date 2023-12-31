import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContextProvider from "./context/indext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);
