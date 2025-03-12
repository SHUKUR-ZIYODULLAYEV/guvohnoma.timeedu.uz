import React, { useState, useMemo } from "react";
import styles from "./LessonAttendanceTable.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LessonAttendanceTable: React.FC = () => {
  const { selectedJournal, lessonDateId, lessonPair } = useSelector(
    (state: RootState) => state.attendanceJournal
  );

  // Ma'lumotlarni boshlang‘ich holatda tayyorlash
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

  // Foydalanuvchi ma'lumotlarini saqlash uchun state
  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

  // Qiymatni o'zgartirish
  const handleChange = (index: number, field: "attendance" | "grade", value: string) => {
    setAttendanceData((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        let newValue: string | number = value;

        if (field === "attendance") {
          // Faqat "" yoki 2 bo‘lishi kerak
          newValue = value === "2" ? 2 : "";
        } else if (field === "grade") {
          // 0 dan 1 gacha bo‘lishi kerak
          const numValue = parseFloat(value);
          newValue = value === "" || (numValue >= 0 && numValue <= 1) ? numValue : item.grade;
        }

        return { ...item, [field]: newValue };
      })
    );
  };

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
                  value={student.attendance.toString()}
                  onChange={(e) => handleChange(index, "attendance", e.target.value)}
                  className={styles.inputField}
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="1"
                  value={student.grade.toString()}
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
