import { configureStore } from "@reduxjs/toolkit";

// Example slice (create one or more slices in separate files)
import eventReducer from "./slices/eventSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer, // Add more reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
