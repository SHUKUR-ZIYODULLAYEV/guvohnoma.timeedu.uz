// src/store/attendanceJournalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";

interface AttendanceJournal {
  id: number;
  group: string;
  subject: string;
  type: string;
  year: string;
  semester: string;
  employee: string;
  groupStudents: {
    id: number;
    fullname: string;
    infoattendance: { date: string; pair: string; attendance: string | null }[];
  }[];
}

interface AttendanceState {
  selectedJournal: AttendanceJournal | null;
}

const initialState: AttendanceState = {
  selectedJournal: null,
};

const attendanceJournalSlice = createSlice({
  name: "attendanceJournal",
  initialState,
  reducers: {
    setSelectedJournal: (state, action: PayloadAction<number>) => {
      state.selectedJournal = data.find((item) => item.id === action.payload) || null;
    },
  },
});

export const { setSelectedJournal } = attendanceJournalSlice.actions;
export default attendanceJournalSlice.reducer;