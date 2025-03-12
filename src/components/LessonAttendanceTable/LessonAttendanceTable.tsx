import React from "react";
import styles from "./LessonAttendanceTable.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LessonAttendanceTable: React.FC = () => {
  const { selectedJournal, lessonDateId, lessonPair } = useSelector(
    (state: RootState) => state.attendanceJournal
  );

  if (!selectedJournal || !lessonDateId || !lessonPair) {
    return <div>Ma'lumot topilmadi</div>;
  }

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
          {selectedJournal.groupStudents.map((student, index) => {
            const lessonData = student.infoattendance.find(
              (info) => info.date === lessonDateId && info.pair === lessonPair
            ) ?? { attendance: "", grade: "" };

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.fullname}</td>
                <td>
                  <input type="text" value={lessonData.attendance ?? ""} className={styles.inputField} readOnly />
                </td>
                <td>
                  <input type="text" value={lessonData.grade ?? ""} className={styles.inputField} readOnly />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={styles.saveButton}>Saqlash</button>
    </div>
  );
};

export default LessonAttendanceTable;
