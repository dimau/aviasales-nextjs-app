import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface searchParamsSliceState {
  currency: string;
  origin: string;
  destination: string;
  month: string;
}

const initialState: searchParamsSliceState = {
      currency: "",
      origin: "",
      destination: "",
      month: "",
    };

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<searchParamsSliceState>) => {
      state.currency = action.payload.currency;
      state.origin = action.payload.origin;
      state.destination = action.payload.destination;
      state.month = action.payload.month;
    }
  },
});