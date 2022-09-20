import React, { useState } from "react";
import {
  Avatar,
  Stack,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Button,
  Typography
} from '@mui/material';
import Assignment from '@mui/icons-material/Assignment';


const OrderItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  console.log(quantity);

  return (
    <Stack width="75%" padding="2em" margin="1em" border="1px solid" borderRadius="10px">
      <Stack alignItems="center">
        <Avatar sx={{ bgcolor: 'green', margin: '0.5em' }} variant="rounded">
          <Assignment />
        </Avatar>
        <Typography variant="h4">
          Create an Order
        </Typography>
      </Stack>
      <Stack marginTop="1em">
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-name-input"
            label="Item Name"
            type="name"
            InputLabelProps={{ shrink: true }}
            onChange={handleNameChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, marginTop: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
        <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Price"
          />
          <TextField
            id="outlined-quantity-input"
            label="Item Quantity"
            type="number"
            InputLabelProps={{ shrink: true }}
            onChange={handleQuantityChange}
            sx={{ flexGrow: 0.5 }}
          />
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-date-input"
            label="Order Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextField
            id="outlined-name-input"
            label="Location"
            type="text"
            InputLabelProps={{ shrink: true }}
            sx={{ flexGrow: '0.9' }}
          />
          {/* <FormHelperText sx={{ marginRight: 'unset' }}></FormHelperText> */}
          <TextField
            id="outlined-name-input"
            label="Time"
            type="time"
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
      </Stack>
      <Stack paddingTop="1em">
        {/* <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-name-input"
            label="Image"
            type="url"
            InputLabelProps={{ shrink: true }}
          />
          <FormHelperText></FormHelperText>
        </FormControl> */}
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden />
        </Button>
      </Stack>
      <Stack marginTop="1em">
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            InputLabelProps={{ shrink: true }}
          />
          <FormHelperText sx={{ marginLeft: 'unset' }}>Maximum 255 characters</FormHelperText>
        </FormControl>
      </Stack>
      <Button variant="contained" sx={{ marginTop: '2em' }}>
        CREATE ORDER
      </Button>
    </Stack>
  );
};
export default OrderItemForm;