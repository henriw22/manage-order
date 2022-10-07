import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material';
import OrderForm from "./OrderForm";

const OrderItem = (props) => {
  const [open, setOpen] = useState(false);
  const orderItem = props.orderItem;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = (string) => {
    const date = new Date(string);
    const day = date.toLocaleString(window.navigator.language, {weekday: 'long'});
    return `${day}, ${date.toLocaleDateString()}`
  };

  const alertColor = (num) => {
    if (num < 40) {
      return '0 0 10px red'
    }
  }

  return (
    <Card sx={{ width: 256, height: 400, margin: 1, borderRadius: 3, boxShadow: alertColor(orderItem.order_quantity) }}>
      <CardHeader
        title={orderItem.name}
        subheader={formatDate(orderItem.order_date)}
        action={
          <IconButton aria-label="settings" size="large" sx={{ backgroundColor: "red"}}>
            <Typography variant="h6" color="white">
              <strong>${orderItem.price}</strong>
            </Typography>
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="160"
        image={orderItem.img_url}
      />
      <CardContent sx={{ paddingBottom: "unset", paddingTop: "unset", marginTop: 2, height: 84, overflowY: "auto", '&::-webkit-scrollbar': { display: "none" } }}>
        <Typography variant="body2" color="text.secondary">
          {orderItem.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          <Typography variant="button">
            Order This
          </Typography>
        </Button>
        <OrderForm open={open} handleClose={handleClose} orderItem={orderItem}/>
      </CardActions>
    </Card>
  );
};
export default OrderItem;