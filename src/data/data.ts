// src/data.ts
export const data = [
    {
      id: 1,
      group: "TEST GURUH",
      subject: "Auditga kirish",
      type: "Ma’ruza",
      year: "2024-2025",
      semester: "1-semestr",
      employee: "ZIYODULLAYEV SHUKUR SAYDULLO O‘G‘LI",
      attendanceDate:[
        { date: "2025-01-27", pair: "1. 09:00-10:20", status:true},
        { date: "2025-01-29", pair: "1. 09:00-10:20", status:true},
        { date: "2025-01-29", pair: "1. 09:00-10:20", status:false},
        { date: "2025-01-29", pair: "4. 13:50-15:10", status:false}
      ],
      groupStudents: [
        {
          id: 1,
          fullname: "TEST1 TEST1 TEST1",
          s: null,
          sz: 4,
          infoattendance: [
            { date: "2025-01-27", pair: "1. 09:00-10:20", attendance: null},
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: 2},
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: 2},
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null}
          ]
        },
        {
          id: 2,
          fullname: "TEST2 TEST2 TEST2",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-27", pair: "1. 09:00-10:20", attendance: null },
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: null },
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: null },
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null }
          ]
        }
      ]
    },
    {
      id: 2,
      group: "TEST GURUH",
      subject: "Auditga kirish",
      type: "Amaliy",
      year: "2024-2025",
      semester: "1-semestr",
      employee: "ZIYODULLAYEV SHUKUR SAYDULLO O‘G‘LI",
      attendanceDate:[
        { date: "2025-01-28", pair: "2. 10:30-11:50", status:false},
        { date: "2025-01-30", pair: "2. 10:30-11:50", status:false}
      ],
      groupStudents: [
        {
          id: 1,
          fullname: "TEST1 TEST1 TEST1",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-28", pair: "2. 10:30-11:50", attendance: null},
            { date: "2025-01-30", pair: "2. 10:30-11:50", attendance: null}
          ]
        },
        {
          id: 2,
          fullname: "TEST2 TEST2 TEST2",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-28", pair: "2. 10:30-11:50", attendance: null},
            { date: "2025-01-30", pair: "2. 10:30-11:50", attendance: null}
          ]
        }
      ]
    },
    {
      id: 3,
      group: "TEST GURUH",
      subject: "Audit",
      type: "Ma’ruza",
      year: "2024-2025",
      semester: "1-semestr",
      employee: "ZIYODULLAYEV SHUKUR SAYDULLO O‘G‘LI",
      attendanceDate:[
        { date: "2025-01-28", pair: "4. 13:50-15:10", status:false},
        { date: "2025-01-29", pair: "1. 09:00-10:20", status:false},
        { date: "2025-01-30", pair: "4. 13:50-15:10", status:false}
      ],
      groupStudents: [
        {
          id: 1,
          fullname: "TEST1 TEST1 TEST1",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-28", pair: "4. 13:50-15:10", attendance: null},
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: null},
            { date: "2025-01-30", pair: "4. 13:50-15:10", attendance: null}
          ]
        },
        {
          id: 4,
          fullname: "TEST2 TEST2 TEST2",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-28", pair: "4. 13:50-15:10", attendance: null},
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: null},
            { date: "2025-01-30", pair: "4. 13:50-15:10", attendance: null}
          ]
        }
      ]
    },
    {
      id: 4,
      group: "TEST GURUH",
      subject: "Audit",
      type: "Amaliy",
      year: "2024-2025",
      semester: "1-semestr",
      employee: "ZIYODULLAYEV SHUKUR SAYDULLO O‘G‘LI",
      attendanceDate:[
        { date: "2025-01-27", pair: "2. 10:30-11:50", status:true},
        { date: "2025-01-29", pair: "2. 10:30-11:50", status:false},
        { date: "2025-01-29", pair: "4. 13:50-15:10", status:false},
        { date: "2025-01-30", pair: "4. 13:50-15:10", status:false}
      ],
      groupStudents: [
        {
          id: 1,
          fullname: "TEST1 TEST1 TEST1",
          s: null,
          sz: 2,
          infoattendance: [
            { date: "2025-01-27", pair: "2. 10:30-11:50", attendance: null},
            { date: "2025-01-29", pair: "2. 10:30-11:50", attendance: 2},
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null},
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null}
          ]
        },
        {
          id: 2,
          fullname: "TEST2 TEST2 TEST2",
          s: null,
          sz: null,
          infoattendance: [
            { date: "2025-01-27", pair: "2. 10:30-11:50", attendance: null },
            { date: "2025-01-29", pair: "2. 10:30-11:50", attendance: null },
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null },
            { date: "2025-01-29", pair: "4. 13:50-15:10", attendance: null }
          ]
        }
      ]
    }
  ];