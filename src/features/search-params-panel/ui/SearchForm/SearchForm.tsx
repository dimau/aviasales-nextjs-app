import Button from "../../../../shared/ui/Button/Button";
import Select from "../../../../shared/ui/Select/Select";
import {currencies, months, changesOptions } from "../../../../shared/ui/Select/constants";
import React, {ChangeEvent, useState} from "react";
import {searchParamsSlice} from "../../searchParamsSlice";
import {useAppDispatch} from "../../../../app/store";
import SelectIATA from "../SelectIATA/SelectIATA";
import {IOption} from "../../model/types";



export default function SearchForm() {
  // For sending search params to Redux Store
  const dispatch = useAppDispatch();

  // Local search form state for form fields
  const [currency, setCurrency] = useState("RUB");
  const [origin, setOrigin] = useState<IOption>({"label":"Санкт-Петербург, Россия, LED", "id":"LED"});
  const [destination, setDestination] = useState<IOption>({"label":"Пхукет, Таиланд, HKT", "id":"HKT"});
  const [month, setMonth] = useState("2023-05-01");
  const [changes, setChanges] = useState("100")

  // Handlers for changing local search form state
  const handleChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => setCurrency(event.target.value);
  const handleChangeMonth = (event: ChangeEvent<HTMLSelectElement>) => setMonth(event.target.value);
  const handleChangeOrigin = (event: React.SyntheticEvent, value: IOption) => setOrigin(value);
  const handleChangeDestination = (event: React.SyntheticEvent, value: IOption) => setDestination(value);
  const handleChangeFlightChanges = (event: ChangeEvent<HTMLSelectElement>) => setChanges(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Change search params in Redux Store
    dispatch(searchParamsSlice.actions.change({
      currency,
      origin,
      destination,
      month,
      changes,
    }));
  }

  return (
      <form onSubmit={handleSubmit}>
        <Select name="currency" options={currencies} value={currency} handleChange={handleChangeCurrency}/>
        <Select name="month" options={months} value={month} handleChange={handleChangeMonth}/>
        <SelectIATA label={"Откуда"} value={origin} handleChange={handleChangeOrigin}/>
        <SelectIATA label={"Куда"} value={destination} handleChange={handleChangeDestination}/>
        <Select name={"changes"} value={changes} options={changesOptions} handleChange={handleChangeFlightChanges}/>
        <Button text="Search"/>
      </form>
  );
}