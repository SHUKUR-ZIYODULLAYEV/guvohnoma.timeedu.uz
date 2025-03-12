import React from "react";
import styles from "./LessonAttendanceDetails.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LessonAttendanceDetails: React.FC = () => {
  const { selectedJournal, lessonDateId, lessonPair } = useSelector(
    (state: RootState) => state.attendanceJournal
  );

  if (!selectedJournal || !lessonDateId || !lessonPair) {
    return <div>Ma'lumot topilmadi</div>;
  }

  return (
    <div className={styles.detailsContainer ?? ""}>
      <h2>Dars Tafsilotlari</h2>
      <p><strong>Guruh:</strong> {selectedJournal.group}</p>
      <p><strong>Fan:</strong> {selectedJournal.subject}</p>
      <p><strong>Dars sanasi:</strong> {lessonDateId}</p>
      <p><strong>Juftlik:</strong> {lessonPair}</p>
      <p><strong>O'qituvchi:</strong> {selectedJournal.employee}</p>
    </div>
  );
};

export default LessonAttendanceDetails;
