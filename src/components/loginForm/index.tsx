import { FC } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

interface ILoginForm {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: FC<ILoginForm> = ({ handleSubmit }) => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Enter your User Name
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          label="User Name"
          name="userName"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
