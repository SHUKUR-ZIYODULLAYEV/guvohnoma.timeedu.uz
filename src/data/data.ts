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
      groupStudents: [
        {
          id: 1,
          fullname: "TEST1 TEST1 TEST1",
          infoattendance: [
            { date: "2025-01-27", pair: "1. 09:00-10:20", attendance: null },
            { date: "2025-01-29", pair: "1. 09:00-10:20", attendance: "2" }
          ]
        },
        {
          id: 2,
          fullname: "TEST2 TEST2 TEST2",
          infoattendance: [
            { date: "2025-01-27", pair: "1. 09:00-10:20", attendance: null }
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
      employee: "ABDULLAEV DILSHOD ILHOM O‘G‘LI",
      groupStudents: []
    }
  ];