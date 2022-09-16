import React, { useState } from "react";
import { 
  Button, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography 
} from '@mui/material';

const OrderItem = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ width: 240, height: 400, margin: 1 }}>
      <CardHeader
        title="Mie Ayam"
        subheader="October 14, 2022"
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
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  );
};
export default OrderItem;