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
  }
  
  export interface Student {
    id: number;
    fullname: string;
    s?: number | null;
    sz?: number | null;
    infoattendance: InfoAttendance[];
  }
  
  export interface FromAttendanceJournal {
    group: string;
    subject: string;
    type: string;
    employee: string;
    attendanceDate: AttendanceDate[];
    groupStudents: Student[];
  }
  