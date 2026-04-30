import { combineReducers } from "@reduxjs/toolkit";

import requestReducer from "./requestSlice";
import logsReducer from "./logsSlice";

export const rootReducer = combineReducers({
  items: requestReducer,
  logs: logsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
