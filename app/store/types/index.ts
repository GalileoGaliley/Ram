import {personageServices} from '../../services/personages';
import type {
  AnyAction,
  Dispatch,
  PayloadAction as ReduxPayloadAction,
  Reducer,
  // SliceCaseReducers,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {ThunkMiddlewareFor} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {PersonagesState} from '../personage/types';
import {FilterState} from '../filters/types';
import type {PersistPartial} from 'redux-persist/es/persistReducer';
import {FavoriteState} from "../favorites/types";

type AppDispatch = Dispatch & ThunkDispatch<RootState, Dependencies, AnyAction>;

type Dependencies = {
  personageServices: typeof personageServices;
};

type PayloadAction<T> = ReduxPayloadAction<T>;

type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies;
  };
};

type Middlewares = ThunkMiddlewareFor<RootState, ThunkMiddlewareOptions>[];

type RootState = {
  personages: PersonagesState;
  filters: FilterState;
  favorites: FavoriteState;
} & PersistPartial;

type ThunkAsyncConfig = {
  extra: Dependencies;
  state: RootState;
  dispatch: AppDispatch;
};

type MainState = Omit<RootState, '_persist'>;

type Reducers = {[K in keyof MainState]: Reducer<MainState[K], AnyAction>};

export type {
  ThunkAsyncConfig,
  PayloadAction,
  RootState,
  Dependencies,
  Reducers,
  Middlewares,
};
