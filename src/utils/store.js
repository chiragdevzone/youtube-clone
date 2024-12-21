import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheSuggestionReducer from "./cacheSuggestionSlice";
import chatSlice from "./chatSlice";
import suggestSlice from "./suggestSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cache: cacheSuggestionReducer,
    chat: chatSlice,
    suggest: suggestSlice,
  },
});

export default store;
