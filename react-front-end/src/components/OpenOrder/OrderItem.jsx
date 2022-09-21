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

const OrderItem = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ width: 240, height: 400, margin: 1, borderRadius: 3 }}>
      <CardHeader
        title="Mie Ayam"
        subheader="October 14, 2022"
        action={
          <IconButton aria-label="settings" size="large" sx={{ backgroundColor: "red"}}>
            <Typography variant="h6" color="white">
              <strong>$15</strong>
            </Typography>
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="160"
        image="/images/mie_ayam.jpeg"
        alt="Paella dish"
      />
      <CardContent sx={{ paddingBottom: "unset" }}>
        <Typography variant="body2" color="text.secondary">
          Mie Ayam is a common Indonesian dish of seasoned yellow wheat noodles topped with diced chicken meat
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