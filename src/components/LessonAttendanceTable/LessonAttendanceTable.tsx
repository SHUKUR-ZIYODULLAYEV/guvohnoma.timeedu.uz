import React from "react";
import styles from "./LessonAttendanceTable.module.css";
import { Student } from "../../types/types";

interface LessonAttendanceTableProps {
  selectedLesson: any;
  lessonDateId: string;
}

const LessonAttendanceTable: React.FC<LessonAttendanceTableProps> = ({
  selectedLesson,
  lessonDateId,
}) => {
  // Tanlangan sanaga tegishli attendance ma'lumotlarini olish
  const attendanceInfo = selectedLesson.groupStudents.map((student: Student) => {
    const lessonData = student.infoattendance.find((info) => info.lessonDateId === lessonDateId);
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
                <input type="text" value={student.attendance} className={styles.inputField} />
              </td>
              <td>
                <input type="text" value={student.grade} className={styles.inputField} />
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
