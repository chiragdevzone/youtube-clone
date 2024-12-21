import { createSlice } from "@reduxjs/toolkit";

const suggestSlice = createSlice({
  name: "suggest",
  initialState: {
    query: null,
    show: false,
  },
  reducers: {
    addQuery: (state, action) => {
      state.show = true;
      state.query = null;
      state.query = action.payload;
    },
  },
});

export const { addQuery } = suggestSlice.actions;
export default suggestSlice.reducer;
