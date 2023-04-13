interface ISelectCityOrCountryProps {
  name: string;
  value: string;
  handleChange: () => void;
}

export default function SelectCityOrCountry({name, value, handleChange}: ISelectCityOrCountryProps) {
  return <input type="text" name={name} value={value} onChange={handleChange}/>;
}