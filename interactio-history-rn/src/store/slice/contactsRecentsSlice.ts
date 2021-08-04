import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NetworkError, TContactsRecents, TContactsRecentsState } from "../type";
import { CONFIG } from "../../config";

export const getContactsRecents = createAsyncThunk(
  "contactsRecents/getContactsRecents",
  async () => {
    const response = await fetch(`${CONFIG.BASE_URL}/records`)
      .then((res) => res.json())
      .then((result) => result);
    return response;
  }
);

const initialState: TContactsRecentsState = {
  response: [],
  error: null,
  loading: true,
};

const contactsRecentsSlice = createSlice({
  name: "contactsRecents",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getContactsRecents.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getContactsRecents.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.response = payload as unknown as TContactsRecents[];
    });

    builder.addCase(getContactsRecents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as NetworkError;
    });
  },
});

export default contactsRecentsSlice.reducer;
