import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestCard, RequestCardsState, RequestStatus } from "@/shared/types";
import { loadFromLocalStorage } from "@/shared/utils/loadFromLocalStorage";

const initialState: RequestCardsState = {
  list: loadFromLocalStorage(),
  isLoading: false,
  error: null,
  success: false,
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<Omit<RequestCard, "id" | "status">>) => {
      const newCard = {
        ...action.payload,
        id: crypto.randomUUID(),
        status: RequestStatus.New,
      };
      state.list = [newCard, ...state.list];
    },
    removeRequest: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((r) => r.id !== action.payload);
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
