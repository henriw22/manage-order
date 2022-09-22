import React from "react";
import { 
  FormControl,
  TextField
} from '@mui/material';


const LocationAndTime = (props) => {
  const {handleLocationChange, handleTimeChange} = props;
  console.log(handleLocationChange);
  return (
    <FormControl sx={{ minWidth: 120, paddingTop: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TextField
        id="outlined-name-input"
        label="Location"
        type="text"
        InputLabelProps={{ shrink: true }}
        sx={{ flexGrow: '0.9' }}
        onChange={handleLocationChange}
      />
      <TextField
        id="outlined-name-input"
        label="Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        onChange={handleTimeChange}
      />
    </FormControl>
  );
};
export default LocationAndTime;