// src/store/attendanceJournalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { FromAttendanceJournal } from "../types/types"; // ✅ types.ts dan import qilish

interface AttendanceState {
  selectedJournal: FromAttendanceJournal | null;
}

const initialState: AttendanceState = {
  selectedJournal: null,
};

const attendanceJournalSlice = createSlice({
  name: "attendanceJournal",
  initialState,
  reducers: {
    setSelectedJournal: (state, action: PayloadAction<number>) => {
      const foundJournal = data.find((item) => item.id === action.payload);

      if (foundJournal) {
        state.selectedJournal = {
          group: foundJournal.group,
          subject: foundJournal.subject,
          type: foundJournal.type,
          employee: foundJournal.employee,
          attendanceDate: foundJournal.attendanceDate || [], // ✅ `attendanceDate` qo‘shildi
          groupStudents: foundJournal.groupStudents || [],
        };
      } else {
        state.selectedJournal = null;
      }
    },
  },
});

export const { setSelectedJournal } = attendanceJournalSlice.actions;
export default attendanceJournalSlice.reducer;
