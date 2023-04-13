import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {searchParamsSlice} from "../features/search-panel/searchParamsSlice";

const rootReducer = combineReducers({
  searchParams: searchParamsSlice.reducer,
});

const makeStore = () =>
    configureStore({
      reducer: rootReducer,
      devTools: true,
    });

export const wrapper = createWrapper(makeStore);