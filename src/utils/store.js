import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheSuggestionReducer from "./cacheSuggestionSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cache: cacheSuggestionReducer,
  },
});

export default store;
