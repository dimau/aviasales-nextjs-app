import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import codesIATA from "./codesIATA.json";
import styles from "./SelectIATA.module.css";
import {IOption} from "../../model/types";

interface ISelectIATAProps {
  label: string;
  value: IOption;
  handleChange: (event: React.SyntheticEvent<Element, Event>, value: IOption | null) => void;
}

function SelectIATA({label, value, handleChange}: ISelectIATAProps) {
  return (
      <Autocomplete
          className={styles.container}
          disablePortal
          options={codesIATA}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => <TextField {...params} label={label} />}
          value={value}
          onChange={handleChange}
          isOptionEqualToValue={(option, value) => option.id === value.id}
      />
  );
}

export default SelectIATA;