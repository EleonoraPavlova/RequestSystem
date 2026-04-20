import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilterStatus, RequestCard, RequestCardsState, RequestStatus } from "@/shared/types";
import { loadFromLocalStorage } from "@/shared/utils/loadFromLocalStorage";

const initialState: RequestCardsState = {
  list: loadFromLocalStorage(),
  isLoading: false,
  error: null,
  success: false,
  filter: "all",
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addRequest: (
      state,
      action: PayloadAction<Omit<RequestCard, "id" | "status" | "createdAt">>
    ) => {
      const newCard = {
        ...action.payload,
        id: crypto.randomUUID(),
        status: RequestStatus.New,
        createdAt: new Date().toISOString(),
      };
      state.list = [newCard, ...state.list];
    },
    changeRequestStatus: (
      state,
      action: PayloadAction<{ id: string; newStatus: RequestStatus }>
    ) => {
      const { id, newStatus } = action.payload;
      const request = state.list.find((r) => r.id === id);
      if (request) {
        request.status = newStatus;
      }
    },
    setFilter: (state, action: PayloadAction<FilterStatus>) => {
      state.filter = action.payload;
    },
    removeRequest: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((r) => r.id !== action.payload);
    },
  },
});

export const { addRequest, removeRequest, changeRequestStatus, setFilter } = requestSlice.actions;
export default requestSlice.reducer;
