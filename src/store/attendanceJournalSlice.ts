import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { FromAttendanceJournal } from "../types/types";

interface AttendanceState {
  selectedJournal: FromAttendanceJournal | null;
  lessonDateId: string | null;
  lessonPair: string | null;
}

const initialState: AttendanceState = {
  selectedJournal: null,
  lessonDateId: null,
  lessonPair: null,
};

const attendanceJournalSlice = createSlice({
  name: "attendanceJournal",
  initialState,
  reducers: {
    setSelectedJournal: (state, action: PayloadAction<number>) => {
      state.selectedJournal = data.find((item) => item.id === action.payload) || null;
    },
    setSelectedLesson: (state, action: PayloadAction<{ lessonDateId: string; lessonPair: string }>) => {
      Object.assign(state, action.payload); // ✅ Kodingizni soddalashtirdik
    },
  },
});

export const { setSelectedJournal, setSelectedLesson } = attendanceJournalSlice.actions;
export default attendanceJournalSlice.reducer;
