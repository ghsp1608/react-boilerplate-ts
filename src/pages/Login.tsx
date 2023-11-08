import { useState } from "react";

import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/state/client/store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = (): void => {
    // Implement your login logic here
    // console.log("Email:", email);
    // console.log("Password:", password);
    login({ name: "aa", role: "CSM" });
    return navigate("/dashboard/credit-report");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Typography variant="h5">Login</Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
