import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HTTP } from '../common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Tresponse, TState, NetworkError } from './type';

export const getContactInteractions = createAsyncThunk(
  'interactions/getContactInteractions',
  async (data: string, { rejectWithValue }) => {
    try {
      const response = (await HTTP.get(
        `contacts/${data}/records`,
      )) as unknown as Tresponse[];
      console.log(response)
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

const initialState: TState = {
  response: [],
  error: null,
  loading: true,
};

const interactionsSlice = createSlice({
  name: 'interactions',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getContactInteractions.pending, state => {
      state.loading = true;
    });

    builder.addCase(getContactInteractions.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload as unknown as Tresponse[];
    });

    builder.addCase(getContactInteractions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default interactionsSlice.reducer;
