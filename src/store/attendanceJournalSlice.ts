import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { FromAttendanceJournal } from "../types/types"; // ✅ types.ts dan import qilish

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
      const foundJournal = data.find((item) => item.id === action.payload);
      state.selectedJournal = foundJournal || null;
    },
    setSelectedLesson: (
      state,
      action: PayloadAction<{ lessonDateId: string; lessonPair: string }>
    ) => {
      state.lessonDateId = action.payload.lessonDateId;
      state.lessonPair = action.payload.lessonPair;
    },
  },
});

export const { setSelectedJournal, setSelectedLesson } = attendanceJournalSlice.actions;
export default attendanceJournalSlice.reducer;
