import { configureStore } from "@reduxjs/toolkit";
import { timelineApi } from "./api/timeline.api";

export const store = configureStore({
  reducer: {
    [timelineApi.reducerPath]: timelineApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(timelineApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
