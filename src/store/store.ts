import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "@/features/utils";
import postReducer from "@/features/posts";

export const store = configureStore({
  reducer: {
    utils: utilsReducer,
    posts: postReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
