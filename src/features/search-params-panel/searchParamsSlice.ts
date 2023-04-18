import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import {AppState} from "../../app/store";
import {IOption} from "./model/types";

interface ISearchParamsSlice {
  currency: string;
  origin: IOption;
  destination: IOption;
  month: string;
  changes: string;
}

const initialState: ISearchParamsSlice = {
      currency: "RUB",
      origin: {"label":"Санкт-Петербург, Россия, LED", "id":"LED"},
      destination: {"label":"Пхукет, Таиланд, HKT", "id":"HKT"},
      month: "2023-05-01",
      changes: "100",
    };

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    change: (state: ISearchParamsSlice, action: PayloadAction<ISearchParamsSlice>) => {
      state.currency = action.payload.currency;
      state.origin = action.payload.origin;
      state.destination = action.payload.destination;
      state.month = action.payload.month;
      state.changes = action.payload.changes;
    },
  },
  // Special reducer for hydrating the state
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.searchParams,
      };
    },
  },
});

export { searchParamsSlice }

export const selectSearchParams = (state: AppState) => state.searchParams;