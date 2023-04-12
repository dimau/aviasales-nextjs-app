interface Option {
  title: string;
  value: string;
  default: boolean;
}

interface ICurrencySelectorProps {
  name: string;
  options: Option[];
}

export default function Selector({name, options}: ICurrencySelectorProps) {
  return (
      <select name={name}>
        {options.map((option, index) => <option value={option.value} selected={option.default} key={index}>{option.title}</option>)}
      </select>
  );
}