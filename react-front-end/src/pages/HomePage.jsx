import React from "react";
import { Stack, Divider } from '@mui/material';
import OrderForm from "../components/OpenOrder/OrderForm";
import OrderView from "../components/OpenOrder/UserView";
import UserView from "../components/OpenOrder/UserView";
import OrderItemList from "../components/OpenOrder/OrderItemList";

const HomePage = () => {
  return (
    <Stack flexDirection="row">
      {/* <OrderForm /> */}
      {/* <OrderItem /> */}
      <OrderItemList />
      <Divider orientation="vertical" variant="middle" flexItem />
      <UserView />
    </Stack>
  );
};
export default HomePage;
