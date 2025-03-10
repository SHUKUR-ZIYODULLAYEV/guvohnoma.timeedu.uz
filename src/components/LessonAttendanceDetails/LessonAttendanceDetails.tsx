import React from "react";
import styles from "./LessonAttendanceDetails.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LessonAttendanceDetails: React.FC = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);
  const lessonDateId = useSelector((state: RootState) => state.attendanceJournal.lessonDateId);
  const lessonPair = useSelector((state: RootState) => state.attendanceJournal.lessonPair);

  if (!selectedData || !lessonDateId || !lessonPair) {
    return <div>Ma'lumot topilmadi</div>;
  }
  
  return (
    <div className={styles.detailsContainer}>
      <h2>Dars Tafsilotlari</h2>
      <p>
        <strong>Guruh:</strong> {selectedData.group}
      </p>
      <p>
        <strong>Fan:</strong> {selectedData.subject}
      </p>
      <p>
        <strong>Dars sanasi:</strong> {lessonDateId}
      </p>
      <p>
        <strong>Juftlik:</strong> {lessonPair}
      </p>
      <p>
        <strong>O'qituvchi:</strong> {selectedData.employee}
      </p>
    </div>
  );
};

export default LessonAttendanceDetails;
