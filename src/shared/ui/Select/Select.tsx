import SelectMUI, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

interface Option {
  title: string;
  value: string;
}

interface ISelectProps {
  label: string;
  value: string;
  options: Option[];
  handleChange: (event: SelectChangeEvent) => void;
}

export default function Select({label, value, options, handleChange}: ISelectProps) {
  return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <SelectMUI
            value={value}
            label={label}
            onChange={handleChange}
        >
          {options.map((option, index) => <MenuItem value={option.value} key={index}>{option.title}</MenuItem>)}
        </SelectMUI>
      </FormControl>
  );
}