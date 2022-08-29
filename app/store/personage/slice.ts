import {createAsyncThunk} from '@reduxjs/toolkit';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPersonagesAction, fetchOnePersonageAction} from './actions';
import {SliceNames} from '../enums';
import {Personage, PersonagesResponse, PersonagesState} from './types';

const initState: PersonagesState = {
  info: {
    count: 0,
    pages: [],
    next: '',
    prev: '',
  },
  personagesIds: [],
  personages: {},
  loading: false,
};

const slice = createSlice({
  initialState: initState,
  name: SliceNames.PERSONAGE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchPersonagesAction.fulfilled,
        (
          state,
          {
            payload: {
              info: {count, pages, next, prev},
              results,
            },
          },
        ) => {
          let arr: number[] = [];
          for (let i = 1; i <= pages; i++) {
            arr.push(i);
          }
          state.info = {
            count,
            next,
            prev,
            pages: arr,
          };
          const normalizedState = results.reduce((acc, personage) => {
            acc[personage.id] = personage;
            return acc;
          }, {} as PersonagesState['personages']);
          const personagesIds = Object.keys(normalizedState);
          state.personages = normalizedState;
          state.personagesIds = personagesIds;
          state.loading = false;
        },
      )
      .addCase(fetchPersonagesAction.rejected, state => {
        state.loading = false;
      })
      .addCase(fetchPersonagesAction.pending, state => {
        state.loading = true;
      })
      .addCase(fetchOnePersonageAction.fulfilled, (state, {payload}) => {
        state.personages = {
          ...state.personages,
          [payload.id]: payload,
        };
        state.personagesIds.push(`${payload.id}`);
        state.loading = false;
      })
      .addCase(fetchOnePersonageAction.rejected, state => {
        state.loading = false;
      })
      .addCase(fetchOnePersonageAction.pending, state => {
        state.loading = true;
      });
  },
});

export const {reducer: personageReducer} = slice;
