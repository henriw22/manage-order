import React from "react";
import { Stack, TextField } from '@mui/material';

const OrderForm = () => {
  return (
    <Stack width="100%" margin="1em">
      <h1>Mie Ayam</h1>
      <Stack marginTop="1em">
        <span>How many would you like to order?</span>
        <TextField
          id="standard-number"
          label="Quantity"
          type="number"
          sx={{ marginTop: '1em' }}
        />
      </Stack>
      <Stack marginTop="1em">
        <span>Pick Up Location</span>
        <TextField placeholder="Outlined" />
      </Stack>
      <Stack marginTop="1em">
        <span>Pick Up Time</span>
        <TextField placeholder="Pick Up Time" />
      </Stack>
    </Stack>
  );
};
export default OrderForm;