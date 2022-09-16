import React from "react";
import { Stack } from '@mui/material';
import OrderItem from "./OrderItem";

const OrderItemList = () => {
  return (
    <Stack width="50%" alignItems="center" margin="1em">
      <h1>Welcome to Open Order</h1>
      <Stack flexDirection="row" height="100%" flexWrap="wrap">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Stack>
    </Stack>
  );
};
export default OrderItemList;