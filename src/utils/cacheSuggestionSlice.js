import { createSlice } from "@reduxjs/toolkit";

const cacheSuggestionSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addSuggestionData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { addSuggestionData } = cacheSuggestionSlice.actions;
export default cacheSuggestionSlice.reducer;
