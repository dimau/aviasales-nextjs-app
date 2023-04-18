import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import codesIATA from "./codesIATA.json";

interface ISelectIATAProps {
  label: string;
  value: string;
  handleChange: (event: React.SyntheticEvent, value: string) => void;
}

function SelectIATA({label, value, handleChange}: ISelectIATAProps) {
  return (
      <Autocomplete
          disablePortal
          options={codesIATA}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label={label} />}
          value={value}
          onChange={handleChange}
      />
  );
}

export default SelectIATA;