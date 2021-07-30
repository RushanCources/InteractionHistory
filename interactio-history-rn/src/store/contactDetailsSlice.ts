import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {NetworkError, TContactData, TContactDetailsState} from './type';
import {CONFIG} from '../config';

export const getContactDetails = createAsyncThunk(
  'contactDetails/getContactDetails',
  async (id: string) => {
    const response = await fetch(`${CONFIG.BASE_URL}/contacts/${id}`)
      .then(res => res.json())
      .then(result => result);
    return response;
  },
);

const initialState: TContactDetailsState = {
  response: {},
  error: null,
  loading: true,
  currentContact: '',
};

const contactDetailsSlice = createSlice({
  name: 'contactDetails',
  initialState,
  reducers: {
    setCurrentId(state, action) {
      state.currentContact = action.payload.toString();
    },
  },

  extraReducers: builder => {
    builder.addCase(getContactDetails.pending, state => {
      state.loading = true;
    });

    builder.addCase(getContactDetails.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.response = payload as TContactData;
    });

    builder.addCase(getContactDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default contactDetailsSlice.reducer;
export const { setCurrentId } = contactDetailsSlice.actions;
