import React from "react";
import styles from "./LessonAttendanceTable.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Student, InfoAttendance } from "../../types/types";

const LessonAttendanceTable: React.FC = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);
  const lessonDateId = useSelector((state: RootState) => state.attendanceJournal.lessonDateId);
  const lessonPair = useSelector((state: RootState) => state.attendanceJournal.lessonPair);

  if (!selectedData || !lessonDateId || !lessonPair) {
    return <div>Ma'lumot topilmadi</div>;
  }

  const attendanceInfo = selectedData.groupStudents.map((student: Student) => {
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
