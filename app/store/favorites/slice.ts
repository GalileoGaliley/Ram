import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SliceNames} from '../enums';
import {FavoriteState, Personage} from './types';

const initState: FavoriteState = {
  favoritePersonagesIds: [],
  favoritePersonages: {},
};

const slice = createSlice({
  initialState: initState,
  name: SliceNames.PERSONAGE,
  reducers: {
    addFavorite: (state, {payload}: PayloadAction<Personage>) => {
      const include = state.favoritePersonagesIds.includes(`${payload.id}`, 0);
      if (!include) {
        state.favoritePersonagesIds.push(`${payload.id}`);
        state.favoritePersonages[`${payload.id}`] = payload;
      }
    },
    removeFavorite: (state, {payload}: PayloadAction<string>) => {
      const index = state.favoritePersonagesIds.indexOf(payload, 0);
      state.favoritePersonagesIds.splice(index, 1);
      delete state.favoritePersonages[`${payload}`];
    },
  },
});

export const {
  actions: {addFavorite, removeFavorite},
  reducer: favoriteReducer,
} = slice;
