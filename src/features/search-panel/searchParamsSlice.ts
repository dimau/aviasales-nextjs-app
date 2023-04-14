import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import {AppState} from "../../app/store";

interface ISearchParamsSlice {
  currency: string;
  origin: string;
  destination: string;
  month: string;
}

const initialState: ISearchParamsSlice = {
      currency: "",
      origin: "",
      destination: "",
      month: "",
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