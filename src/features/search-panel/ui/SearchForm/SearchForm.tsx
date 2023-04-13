import SelectCityOrCountry from "../../../../shared/ui/SelectCityOrCountry/SelectCityOrCountry";
import Button from "../../../../shared/ui/Button/Button";
import Select from "../../../../shared/ui/Select/Select";
import {currencies, months} from "../../../../shared/ui/Select/constants";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {searchParamsSlice} from "../../searchParamsSlice";

export default function SearchForm() {
  // For sending search params to Redux Store
  const dispatch = useDispatch();

  // Local search form state for form fields
  const [currency, setCurrency] = useState("RUB");
  const [origin, setOrigin] = useState("LED");
  const [destination, setDestination] = useState("HKT");
  const [month, setMonth] = useState("2023-05-01");

  // Handlers for changing local search form state
  const handleChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => setCurrency(event.target.value);
  const handleChangeMonth = (event: ChangeEvent<HTMLSelectElement>) => setMonth(event.target.value);
  const handleChangeOrigin = (event: ChangeEvent<HTMLInputElement>) => setOrigin(event.target.value);
  const handleChangeDestination = (event: ChangeEvent<HTMLInputElement>) => setDestination(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Change search params in Redux Store
    dispatch(searchParamsSlice.actions.change({
      currency,
      origin,
      destination,
      month,
    }));
  }

  return (
      <form onSubmit={handleSubmit}>
        <Select name="currency" options={currencies} value={currency} handleChange={handleChangeCurrency}/>
        <Select name="month" options={months} value={month} handleChange={handleChangeMonth}/>
        <SelectCityOrCountry name="origin" value={origin} handleChange={handleChangeOrigin}/>
        <SelectCityOrCountry name="destination" value={destination} handleChange={handleChangeDestination}/>
        <Button text="Search"/>
      </form>
  );
}