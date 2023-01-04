import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name === "" && password === "" && email === "") {
      alert("Please Enter your Name, Email and Password ");
    } else if (name === "") {
      alert("Please Enter your Name");
    } else if (email === "") {
      alert("Please Enter your Email");
    } else if (password === "") {
      alert("Please Enter your Password");
    } else if (password.length < 6) {
      alert("Password Must be at least 6 Characters");
    } else {
      const users = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post("/api/auth/signup", users)
        .then(() => {
          console.log("Sign Up Successful");
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    }
  };
  return (
   
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Name'
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  autoComplete='new-password'
                />
              </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            
          </Box>
        </Box>
      </Container>
  );
}
