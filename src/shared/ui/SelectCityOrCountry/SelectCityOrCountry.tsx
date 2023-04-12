interface ISelectCityOrCountryProps {
  name: string;
  defaultValue: string;
}

export default function SelectCityOrCountry({name, defaultValue}: ISelectCityOrCountryProps) {
  return <input type="text" name={name} value={defaultValue}/>;
}