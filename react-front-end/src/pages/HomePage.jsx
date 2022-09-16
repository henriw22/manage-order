import React from "react";
import { Stack, Divider } from '@mui/material';
import OrderForm from "../components/OpenOrder/OrderForm";
import OrderView from "../components/OpenOrder/OrderView";
import OrderItem from "../components/OpenOrder/OrderItem";
import OrderItemList from "../components/OpenOrder/OrderItemList";

const HomePage = () => {
  return (
    <Stack flexDirection="row" height="100vh">
      {/* <OrderForm /> */}
      {/* <OrderItem /> */}
      <OrderItemList />
      <Divider orientation="vertical" variant="middle" flexItem />
      <OrderView />
    </Stack>
  );
};
export default HomePage;
