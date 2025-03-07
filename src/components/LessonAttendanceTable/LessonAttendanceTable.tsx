import React from "react";
import styles from "./LessonAttendanceTable.module.css";
import { Student, InfoAttendance } from "../../types/types";

interface LessonAttendanceTableProps {
  selectedLesson: { groupStudents: Student[]; attendanceDate: { date: string; pair: string }[] };
  lessonDateId: string;
  lessonPair: string;
}

const LessonAttendanceTable: React.FC<LessonAttendanceTableProps> = ({
  selectedLesson,
  lessonDateId,
  lessonPair,
}) => {
  // Tanlangan sanaga va juftlikka tegishli attendance ma'lumotlarini olish
  const attendanceInfo = selectedLesson.groupStudents.map((student: Student) => {
    const lessonData: InfoAttendance | undefined = student.infoattendance.find(
      (info) => info.date === lessonDateId && info.pair === lessonPair
    );

    return {
      fullname: student.fullname,
      attendance: lessonData?.attendance || "",
      grade: lessonData?.grade || "",
    };
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Talabaning F.I.Sh.</th>
            <th>Kelmadi</th>
            <th>Baho</th>
          </tr>
        </thead>
        <tbody>
          {attendanceInfo.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
              <td>
                <input type="text" value={student.attendance} className={styles.inputField} readOnly />
              </td>
              <td>
                <input type="text" value={student.grade} className={styles.inputField} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.saveButton}>Saqlash</button>
    </div>
  );
};

export default LessonAttendanceTable;
