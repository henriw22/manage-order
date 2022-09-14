import React from "react";
import { Stack, Button } from '@mui/material';
import OrderForm from "../components/OpenOrder/OrderForm";
import OrderView from "../components/OpenOrder/OrderView";

const HomePage = () => {
  return (
    <Stack flexDirection="row">
      <OrderForm />
      <OrderView />
    </Stack>
  );
};
export default HomePage;
