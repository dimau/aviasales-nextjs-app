import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {searchParamsSlice} from "../features/search-params-panel/searchParamsSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  [searchParamsSlice.name]: searchParamsSlice.reducer,
});

const makeStore = () =>
    configureStore({
      reducer: rootReducer,
      devTools: true,
    });

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;