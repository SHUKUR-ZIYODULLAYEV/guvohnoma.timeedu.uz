import React from "react";
import styles from "./LessonAttendanceDetails.module.css";
import { FromAttendanceJournal, AttendanceDate } from "../../types/types";

interface LessonAttendanceDetailsProps {
  selectedLesson: FromAttendanceJournal;
  lessonDateId: string;
  lessonPair: string;  // 🟢 Yangi prop qabul qilamiz
}

const LessonAttendanceDetails: React.FC<LessonAttendanceDetailsProps> = ({
  selectedLesson,
  lessonDateId,
  lessonPair
}) => {
  // 🟢 Tanlangan dars sanasiga VA juftlikka mos keladigan ma'lumotni olish
  const lessonDateInfo: AttendanceDate | undefined = selectedLesson.attendanceDate.find(
    (date) => date.date === lessonDateId && date.pair === lessonPair
  );

  return (
    <div className={styles.detailsContainer}>
      <h2>Dars Tafsilotlari</h2>
      <p>
        <strong>Guruh:</strong> {selectedLesson.group}
      </p>
      <p>
        <strong>Fan:</strong> {selectedLesson.subject}
      </p>
      <p>
        <strong>Dars sanasi:</strong> {lessonDateId}
      </p>
      <p>
        <strong>Juftlik:</strong> {lessonDateInfo?.pair || "Noma'lum"}
      </p>
      <p>
        <strong>O'qituvchi:</strong> {selectedLesson.employee}
      </p>
    </div>
  );
};

export default LessonAttendanceDetails;
