import { Middleware } from "@reduxjs/toolkit";

import type { RootState } from "@/services/rootReducer";

export const localStorageMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);

  if (typeof action === "object" && action !== null && "type" in action) {
    const { type } = action as { type: unknown };

    if (typeof type === "string" && type.startsWith("request/")) {
      const state = store.getState().items;

      localStorage.setItem("my_requests", JSON.stringify(state.list));
    }
  }

  return result;
};
