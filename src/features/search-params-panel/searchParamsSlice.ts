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
    changeCurrency: (state: ISearchParamsSlice, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    changeMonth: (state: ISearchParamsSlice, action: PayloadAction<string>) => {
      state.month = action.payload;
    },
    changeOrigin: (state: ISearchParamsSlice, action: PayloadAction<IOption>) => {
      state.origin = action.payload;
    },
    changeDestination: (state: ISearchParamsSlice, action: PayloadAction<IOption>) => {
      state.destination = action.payload;
    },
    changeChanges: (state: ISearchParamsSlice, action: PayloadAction<string>) => {
      state.changes = action.payload;
    },
  },
  // Special reducer for hydrating the state
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.searchParams,
      };
    })
  },
});

export { searchParamsSlice }

export const selectSearchParams = (state: AppState) => state.searchParams;