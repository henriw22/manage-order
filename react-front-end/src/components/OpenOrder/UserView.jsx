import React from "react";
import { Stack } from '@mui/material';

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const UserView = () => {
  return (
    <Stack width="50%" alignItems="center" margin="1em">
      <h1>Welcome to Open Order</h1>
      <SignUp />
    </Stack>
  );
};
export default UserView;