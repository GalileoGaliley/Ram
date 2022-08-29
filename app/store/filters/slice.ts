import {createSlice} from '@reduxjs/toolkit';
import {SliceNames} from '../enums';
import type {Filter, FilterState, SelectedFilters} from './types';
import {PayloadAction} from '../types';
const initState: FilterState = {
  filters: {
    status: ['Alive', 'Dead', 'unknown'],
    gender: ['Female', 'Male', 'Genderless', 'unknown'],
  },
  selectedFilters: {
    status: '',
    gender: '',
    page: 1,
  },
};

const slice = createSlice({
  initialState: initState,
  name: SliceNames.FILTERS,
  reducers: {
    setSelectedFilter: (
      state,
      {payload}: PayloadAction<Partial<SelectedFilters>>,
    ) => {
      state.selectedFilters = {
        ...state.selectedFilters,
        ...payload,
      };
    },
  },
});

export const {
  actions: {setSelectedFilter},
  reducer: filterReducer,
} = slice;
