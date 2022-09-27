import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent
} from '@mui/material';

const axios = require('axios');

const OrderForm = (props) => {
  const { open, handleClose, orderItem } = props;
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState(1);
  // const [time, setTime] = useState('');
  console.log(orderItem);

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleQuantityChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  // const handleTimeChange = (event: SelectChangeEvent) => {
  //   setTime(event.target.value);
  // };

  const submitOrder = () => {
    // console.log(quantity, location);
    axios.post("/api/orders", {
      user_id: 1,     // to be changed to user id when login is implemented
      item_id: orderItem.id,
      created_at: new Date().toDateString(),
      quantity: quantity,
      location: location
    }).then(response => {
      console.log('response: ', response);
    });
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    // BackdropProps={{ style: { backgroundColor: "transparent" }}}
    // sx={{
    //   ".MuiDialog-container": {width: '50%', height: '80%'},
    // }}
    >
      <DialogTitle id="alert-dialog-title">
        Mie Ayam
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack marginTop="1em">
            <span>How many would you like to order?</span>
            <FormControl sx={{ m: 1, minWidth: 120, paddingTop: 1 }}>
              <TextField
                id="standard-number"
                label="Quantity"
                type="number"
                InputProps={{ inputProps: { min: 1, max: orderItem.order_quantity} }}
                onChange={handleQuantityChange}
              />
              <FormHelperText></FormHelperText>
            </FormControl>
          </Stack>
          <Stack marginTop="1em">
            <span>Pick Up Location</span>
            <FormControl sx={{ m: 1, minWidth: 120, paddingTop: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={location}
                label="Location"
                onChange={handleLocationChange}
              >
                {orderItem.locations.map((location, index) => (
                  <MenuItem key={index} value={location}>{location}</MenuItem>
                ))}
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Stack>
          {/* <Stack marginTop="1em">
            <span>Pick Up Time</span>
            <FormControl sx={{ m: 1, minWidth: 120, paddingTop: 1 }}>
              <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={time}
                label="Time"
                onChange={handleTimeChange}
              >
                <MenuItem value="">
                  <em>Please choose a pick up time</em>
                </MenuItem>
                <MenuItem value="10">10 AM</MenuItem>
                <MenuItem value="12">12 PM</MenuItem>
                <MenuItem value="14">2 PM</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Stack> */}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submitOrder} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default OrderForm;