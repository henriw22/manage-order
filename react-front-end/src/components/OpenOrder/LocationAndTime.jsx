import React from "react";
import { 
  FormControl,
  TextField
} from '@mui/material';


const LocationAndTime = (props) => {
  const {handleInputChange, value} = props;

  return (
    <FormControl sx={{ minWidth: 120, paddingTop: 2, flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
      <TextField
        id="outlined-name-input"
        name="location"
        label="Location"
        type="text"
        InputLabelProps={{ shrink: true }}
        sx={{ flexGrow: '0.9' }}
        onChange={handleInputChange}
        value={value.location}
      />
      <TextField
        id="outlined-name-input"
        name="time"
        label="Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        onChange={handleInputChange}
        value={value.time}
      />
    </FormControl>
  );
};
export default LocationAndTime;