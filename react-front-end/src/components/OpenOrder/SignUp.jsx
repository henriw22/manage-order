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


const SignUp = () => {
  return (
    <Stack width="50%" padding="2em" margin="1em" border="1px solid" borderRadius="10px">
      <Stack alignItems="center">
        <Avatar sx={{ bgcolor: 'red', margin:'0.5em'}}>
          <LockOpenIcon />
        </Avatar>
        <Typography>
          Sign Up
        </Typography>
      </Stack>
      <Stack marginTop="1em">
        <FormControl sx={{ minWidth: 120, paddingTop: 1 }}>
          <TextField
            id="outlined-name-input"
            label="Name"
            type="name"
            autoComplete="current-name"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
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
            id="outlined-phone-input"
            label="Phone"
            type="phone"
            autoComplete="current-phone"
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
        SIGN UP
      </Button>
      <Typography variant="subtitle1" color="primary" marginTop="0.5em" onClick={() => console.log('test')}>
        Already have an account? Sign In
      </Typography>
    </Stack>
  );
};
export default SignUp;