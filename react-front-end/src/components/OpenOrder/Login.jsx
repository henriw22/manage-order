import React from "react";
import { 
  Avatar, 
  Stack, 
  FormControl, 
  FormHelperText, 
  TextField, 
  Button, 
  Typography 
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login = () => {
  return (
    <Stack width="50%">
      <Stack alignItems="center">
      <Avatar>
        <LockOpenIcon />
      </Avatar>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 1 }}>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 1 }}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Button variant="contained" sx={{ marginTop: '2em' }}>
        SIGN IN
      </Button>
      <Typography variant="subtitle1" color="primary" marginTop="0.5em">
        Don't have an account? Sign Up
      </Typography>
    </Stack>
  );
};
export default Login;