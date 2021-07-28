import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Tresponse, TState, NetworkError} from './type';
import {CONFIG} from '../config';

//endpoint для запроса contact iteractions
export const getContactInteractions = createAsyncThunk(
  'interactions/getContactInteractions',
  async (id: string) => {
    const response = await fetch(`${CONFIG.BASE_URL}/contacts/${id}/records`)
      .then(res => res.json())
    return response;
  },
);

const initialState: TState = {
  response: [],
  error: null,
  loading: true,
  currentContact: '',
};

const interactionsSlice = createSlice({
  name: 'interactions',
  initialState,
  reducers: {
    setCurrentId(state, action) {
      state.currentContact = action.payload.toString();
    },
  },

  extraReducers: builder => {
    builder.addCase(getContactInteractions.pending, state => {
      state.loading = true;
    });

    builder.addCase(getContactInteractions.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.response = payload as unknown as Tresponse[];
    });

    builder.addCase(getContactInteractions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default interactionsSlice.reducer;
export const { setCurrentId } = interactionsSlice.actions;
