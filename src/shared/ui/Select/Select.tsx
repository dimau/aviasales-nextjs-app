interface Option {
  title: string;
  value: string;
  default: boolean;
}

interface ISelectProps {
  name: string;
  value: string;
  options: Option[];
  handleChange: () => void;
}

export default function Select({name, value, options, handleChange}: ISelectProps) {
  return (
      <select name={name} onChange={handleChange}>
        {options.map((option, index) => <option value={option.value} selected={option.value === value} key={index}>{option.title}</option>)}
      </select>
  );
}