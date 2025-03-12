import React, { useState, useMemo } from "react";
import styles from "./LessonAttendanceTable.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LessonAttendanceTable: React.FC = () => {
  const { selectedJournal, lessonDateId, lessonPair } = useSelector(
    (state: RootState) => state.attendanceJournal
  );

  // useMemo bilan boshlang‘ich attendanceData ni shakllantiramiz
  const initialAttendanceData = useMemo(() => {
    if (!selectedJournal || !lessonDateId || !lessonPair) return [];

    return selectedJournal.groupStudents.map((student) => ({
      fullname: student.fullname,
      attendance: student.infoattendance.find(
        (info) => info.date === lessonDateId && info.pair === lessonPair
      )?.attendance || "",
      grade: student.infoattendance.find(
        (info) => info.date === lessonDateId && info.pair === lessonPair
      )?.grade || "",
    }));
  }, [selectedJournal, lessonDateId, lessonPair]);

  // Foydalanuvchi kiritgan ma'lumotlarni saqlash uchun state
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

  // Qiymat o‘zgarganda holatni yangilash
  const handleChange = (index: number, field: "attendance" | "grade", value: string) => {
    setAttendanceData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  // Agar ma'lumotlar topilmasa
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
          {attendanceData.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
              <td>
                <input
                  type="text"
                  value={student.attendance}
                  onChange={(e) => handleChange(index, "attendance", e.target.value)}
                  className={styles.inputField}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.grade}
                  onChange={(e) => handleChange(index, "grade", e.target.value)}
                  className={styles.inputField}
                />
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
