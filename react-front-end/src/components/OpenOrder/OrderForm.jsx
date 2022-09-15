import React, { useState } from "react";
import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent
} from '@mui/material';

const OrderForm = () => {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  return (
    <Stack width="100%" margin="1em">
      <h1>Mie Ayam</h1>
      <Stack marginTop="1em">
        <span>How many would you like to order?</span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="standard-number"
            label="Quantity"
            type="number"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack marginTop="1em">
        <span>Pick Up Location</span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={location}
            label="Location"
            onChange={handleLocationChange}
          >
            <MenuItem value="">
              <em>Please choose a pick up location</em>
            </MenuItem>
            <MenuItem value="Lougheed Mall">Lougheed Mall</MenuItem>
            <MenuItem value="Metrotown">Metrotown</MenuItem>
            <MenuItem value="Home">Home</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack marginTop="1em">
        <span>Pick Up Time</span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
      </Stack>
    </Stack>
  );
};
export default OrderForm;