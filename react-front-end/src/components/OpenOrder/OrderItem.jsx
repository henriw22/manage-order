import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Stack, Typography } from '@mui/material';

const OrderItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Mie Ayam"
        subheader="October 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/mie_ayam.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mie Ayam is a common Indonesian dish of seasoned yellow wheat noodles topped with diced chicken meat (ayam).
        </Typography>
      </CardContent>
    </Card>
  );
};
export default OrderItem;