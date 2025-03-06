import React from "react";
import styles from "./LessonAttendanceDetails.module.css";

interface LessonAttendanceDetailsProps {
  selectedLesson: any;
  lessonDateId: string;
}

const LessonAttendanceDetails: React.FC<LessonAttendanceDetailsProps> = ({
  selectedLesson,
  lessonDateId,
}) => {
  const lessonDateInfo = selectedLesson.attendanceDate.find(
    (date) => date.date === lessonDateId
  );

  return (
    <div className={styles.detailsContainer}>
      <h2>Dars Tafsilotlari</h2>
      <p>
        <strong>Guruh:</strong> {selectedLesson.groupName}
      </p>
      <p>
        <strong>Fan:</strong> {selectedLesson.subject}
      </p>
      <p>
        <strong>Dars sanasi:</strong> {lessonDateId}
      </p>
      <p>
        <strong>Juftlik:</strong> {lessonDateInfo?.pair}
      </p>
      <p>
        <strong>O'qituvchi:</strong> {selectedLesson.teacher}
      </p>
    </div>
  );
};

export default LessonAttendanceDetails;
