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
  const orderItems = props.orderItems;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ width: 240, height: 400, margin: 1, borderRadius: 3 }}>
      <CardHeader
        title={orderItems.name}
        subheader={orderItems.date}
        action={
          <IconButton aria-label="settings" size="large" sx={{ backgroundColor: "red"}}>
            <Typography variant="h6" color="white">
              <strong>${orderItems.price}</strong>
            </Typography>
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="160"
        image={orderItems.img_url}
      />
      <CardContent sx={{ paddingBottom: "unset" }}>
        <Typography variant="body2" color="text.secondary">
          {orderItems.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          <Typography variant="button">
            Order This
          </Typography>
        </Button>
        <OrderForm open={open} handleClose={handleClose} />
      </CardActions>
    </Card>
  );
};
export default OrderItem;