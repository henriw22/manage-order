import React from "react";
import {
  Avatar,
  Stack,
  FormControl,
  FormHelperText,
  TextField,
  Button,
  Typography
} from '@mui/material';
import Assignment from '@mui/icons-material/Assignment';


const OrderItemForm = () => {
  return (
    <Stack width="75%" padding="2em" margin="1em" border="1px solid" borderRadius="10px">
      <Stack alignItems="center">
        <Avatar sx={{ bgcolor: 'green', margin: '0.5em' }} variant="rounded">
          <Assignment />
        </Avatar>
        <Typography>
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
          />
          <FormHelperText></FormHelperText>
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
            sx={{flexGrow: '0.9'}}
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
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-name-input"
            label="Description"
            type="text"
            InputLabelProps={{ shrink: true }}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Button variant="contained" sx={{ marginTop: '2em' }}>
        CREATE ORDER
      </Button>
      <Typography variant="subtitle1" color="primary" marginTop="0.5em" onClick={() => console.log('test')}>
        Don't have an account? Sign Up
      </Typography>
      {/* <Button>
      Don't have an account? Sign Up
      </Button> */}
    </Stack>
  );
};
export default OrderItemForm;