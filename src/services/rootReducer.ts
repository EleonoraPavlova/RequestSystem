import { combineReducers } from "@reduxjs/toolkit";

import requestReducer from "./requestSlice";

export const rootReducer = combineReducers({
  items: requestReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
