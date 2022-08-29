import {createAsyncThunk} from '@reduxjs/toolkit';
import {SliceNames} from '../enums';
import {Personage, PersonagesResponse} from './types';
// import {Filter} from '../filters/types';
import {ThunkAsyncConfig} from '../types';
import {SelectedFilters} from "../filters/types";

const fetchPersonagesAction = createAsyncThunk<
  PersonagesResponse,
  SelectedFilters,
  ThunkAsyncConfig
>(
  `${SliceNames.PERSONAGE}/fetchPersonagesAction`,
  async (
    params,
    {
      extra: {
        personageServices: {fetchPersonagesService},
      },
    },
  ) => await fetchPersonagesService(params),
);

const fetchOnePersonageAction = createAsyncThunk<
  Personage,
  number,
  ThunkAsyncConfig
>(
  `${SliceNames.PERSONAGE}/fetchOnePersonageAction`,
  async (
    id,
    {
      extra: {
        personageServices: {fetchOnePersonageService},
      },
    },
  ) => await fetchOnePersonageService(id),
);

export {fetchPersonagesAction, fetchOnePersonageAction};
