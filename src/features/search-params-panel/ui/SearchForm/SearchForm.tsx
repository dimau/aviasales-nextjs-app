import Select from "../../../../shared/ui/Select/Select";
import {currencies, months, changesOptions } from "../../../../shared/ui/Select/constants";
import React, {FormEvent} from "react";
import {searchParamsSlice, selectSearchParams} from "../../searchParamsSlice";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import SelectIATA from "../SelectIATA/SelectIATA";
import { SelectChangeEvent } from '@mui/material/Select';
import {IOption} from "../../model/types";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  // For sending search params to Redux Store
  const dispatch = useAppDispatch();

  // Get current params from store
  const searchParams = useAppSelector(selectSearchParams);

  // Handlers for changing local search form state
  const handleChangeCurrency = (event: SelectChangeEvent) => dispatch(searchParamsSlice.actions.changeCurrency(event.target.value));
  const handleChangeMonth = (event: SelectChangeEvent) => dispatch(searchParamsSlice.actions.changeMonth(event.target.value));
  const handleChangeFlightChanges = (event: SelectChangeEvent) => dispatch(searchParamsSlice.actions.changeChanges(event.target.value));
  const handleChangeOrigin = (event: React.SyntheticEvent<Element, Event>, value: IOption | null) => {
    if (value) dispatch(searchParamsSlice.actions.changeOrigin(value));
  }
  const handleChangeDestination = (event: React.SyntheticEvent<Element, Event>, value: IOption | null) => {
    if (value) dispatch(searchParamsSlice.actions.changeDestination(value));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.directions}>
          <SelectIATA label={"Откуда"} value={searchParams.origin} handleChange={handleChangeOrigin}/>
          <SelectIATA label={"Куда"} value={searchParams.destination} handleChange={handleChangeDestination}/>
        </div>
        <div className={styles.options}>
          <Select label={"Валюта"} options={currencies} value={searchParams.currency} handleChange={handleChangeCurrency}/>
          <Select label={"Месяц"} options={months} value={searchParams.month} handleChange={handleChangeMonth}/>
          <Select label={"Пересадки"} options={changesOptions} value={searchParams.changes} handleChange={handleChangeFlightChanges}/>
        </div>
      </form>
  );
}