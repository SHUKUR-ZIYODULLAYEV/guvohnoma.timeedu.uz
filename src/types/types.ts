// types.ts

export interface AttendanceDate {
    date: string;
    pair: string;
    status: boolean;
  }
  
  export interface InfoAttendance {
    date: string;
    pair: string;
    attendance: number | null;
    grade: number;
  }
  
  export interface Student {
    id: number;
    fullname: string;
    s?: number | null;
    sz?: number | null;
    infoattendance: InfoAttendance[];
  }
  
  export interface FromAttendanceJournal {
    id: number;
    group: string;
    subject: string;
    type: string;
    year: string;
    semester: string;
    employee: string;
    attendanceDate: AttendanceDate[];
    groupStudents: Student[];
  }
  export interface User {
    id: string;
    email: string;
    fullname: string;
    role: string;
  }
  export interface AuthState {
    id: string | null;
    email: string | null;
    role: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }