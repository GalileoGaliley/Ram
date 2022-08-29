import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import {Dependencies, Reducers, RootState, Middlewares} from './types';
import {personageServices} from '../services/personages';
import {personageReducer} from './personage/slice';
import {filterReducer} from './filters/slice';
import {favoriteReducer} from './favorites/slice';

const dependencies: Dependencies = {
  personageServices,
};
const reducers: Reducers = {
  personages: personageReducer,
  filters: filterReducer,
  favorites: favoriteReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: [],
  whitelist: ['favorites'],
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore<RootState, AnyAction, Middlewares>({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: dependencies,
      },
    }),
});
const persistor = persistStore(store);

export {store, persistor};
