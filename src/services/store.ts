import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { localStorageMiddleware } from "@/services/middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
