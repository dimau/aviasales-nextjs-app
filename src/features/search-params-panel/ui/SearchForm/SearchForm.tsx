import Select from "../../../../shared/ui/Select/Select";
import {currencies, months, changesOptions } from "../../../../shared/ui/Select/constants";
import React, {ChangeEvent} from "react";
import {searchParamsSlice, selectSearchParams} from "../../searchParamsSlice";
import {useAppDispatch, useAppSelector} from "../../../../app/store";
import SelectIATA from "../SelectIATA/SelectIATA";
import {IOption} from "../../model/types";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  // For sending search params to Redux Store
  const dispatch = useAppDispatch();

  // Get current params from store
  const searchParams = useAppSelector(selectSearchParams);

  // Handlers for changing local search form state
  const handleChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => dispatch(searchParamsSlice.actions.changeCurrency(event.target.value));
  const handleChangeMonth = (event: ChangeEvent<HTMLSelectElement>) => dispatch(searchParamsSlice.actions.changeMonth(event.target.value));
  const handleChangeOrigin = (event: React.SyntheticEvent, value: IOption) => dispatch(searchParamsSlice.actions.changeOrigin(value));
  const handleChangeDestination = (event: React.SyntheticEvent, value: IOption) => dispatch(searchParamsSlice.actions.changeDestination(value));
  const handleChangeFlightChanges = (event: ChangeEvent<HTMLSelectElement>) => dispatch(searchParamsSlice.actions.changeChanges(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.directions}>
          <SelectIATA label={"Откуда"} value={searchParams.origin} handleChange={handleChangeOrigin}/>
          <SelectIATA label={"Куда"} value={searchParams.destination} handleChange={handleChangeDestination}/>
        </div>
        <div className={styles.options}>
          <Select name="currency" options={currencies} value={searchParams.currency} handleChange={handleChangeCurrency}/>
          <Select name="month" options={months} value={searchParams.month} handleChange={handleChangeMonth}/>
          <Select name={"changes"} value={searchParams.changes} options={changesOptions} handleChange={handleChangeFlightChanges}/>
        </div>
      </form>
  );
}