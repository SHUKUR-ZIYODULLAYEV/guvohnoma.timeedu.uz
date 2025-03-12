import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    // ✅ Endi id emas, to‘liq obyekt qabul qiladi
    setSelectedJournal: (state, action: PayloadAction<FromAttendanceJournal | null>) => {
      state.selectedJournal = action.payload;
    },
    setSelectedLesson: (state, action: PayloadAction<{ lessonDateId: string; lessonPair: string }>) => {
      state.lessonDateId = action.payload.lessonDateId;
      state.lessonPair = action.payload.lessonPair;
    },
  },
});

export const { setSelectedJournal, setSelectedLesson } = attendanceJournalSlice.actions;
export default attendanceJournalSlice.reducer;
