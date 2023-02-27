import React, {useState, useEffect} from "react";
import { Stack } from '@mui/material';
import OrderItem from "./OrderItem";

const axios = require('axios');

const OrderItemList = () => {
  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    axios.get("/api/order_items").then(response => {
      setOrderItems(response.data);
    });
  }, [])
  
  console.log('Items:', orderItems);

  return (
    <Stack width="50%" alignItems="center" margin="1em">
      <h1>Welcome to Open Order</h1>
      <Stack flexDirection="row" height="100%" flexWrap="wrap" alignContent="flex-start">
        {orderItems.map((item) => (
          <OrderItem key={item.id} orderItem={item}/>
        ))}
      </Stack>
    </Stack>
  );
};
export default OrderItemList;