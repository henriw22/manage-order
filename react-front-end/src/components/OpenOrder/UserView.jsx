import React from "react";
import { Stack } from '@mui/material';

import Login from "./Login";

const UserView = () => {
  return (
    <Stack width="50%" alignItems="center" margin="1em">
      <h1>Welcome to Open Order</h1>
      <Login />
    </Stack>
  );
};
export default UserView;