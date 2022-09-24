import React from "react";
import { 
  FormControl,
  TextField
} from '@mui/material';


const LocationAndTime = (props) => {
  const {handleInputChange} = props;

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
      />
      <TextField
        id="outlined-name-input"
        name="time"
        label="Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        onChange={handleInputChange}
      />
    </FormControl>
  );
};
export default LocationAndTime;