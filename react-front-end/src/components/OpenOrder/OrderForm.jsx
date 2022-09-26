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

const OrderForm = (props) => {
  const { open, handleClose, quantity, locations } = props;
  const [location, setLocation] = useState('');
  // const [time, setTime] = useState('');

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  // const handleTimeChange = (event: SelectChangeEvent) => {
  //   setTime(event.target.value);
  // };

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
                InputProps={{ inputProps: { min: 0, max: quantity} }}
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
                {locations.map((location) => (
                  <MenuItem value={location}>{location}</MenuItem>
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
        <Button onClick={handleClose} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default OrderForm;