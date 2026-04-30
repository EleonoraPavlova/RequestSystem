import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LogEntry } from "@/shared/types";

interface LogsState {
  list: LogEntry[];
}

const initialState: LogsState = {
  list: JSON.parse(localStorage.getItem("logs") || "[]"),
};

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<Omit<LogEntry, "id" | "timestamp">>) => {
      const newLog: LogEntry = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
      };
      state.list.unshift(newLog);
      localStorage.setItem("logs", JSON.stringify(state.list));
    },
  },
});

export const { addLog } = logsSlice.actions;
export default logsSlice.reducer;
