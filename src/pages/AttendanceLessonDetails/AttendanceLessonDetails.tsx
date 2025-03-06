import { useParams } from "react-router-dom";
import LessonAttendanceTable from "../../components/LessonAttendanceTable/LessonAttendanceTable";
import LessonAttendanceDetails from "../../components/LessonAttendanceDetails/LessonAttendanceDetails";
import styles from "./AttendanceLessonDetails.module.css";
import { data } from "../../data/data";

const AttendanceLessonDetails = () => {
  const { lessonDateId } = useParams();

  // lessonDateId bo‘yicha kerakli ma'lumotlarni olish
  const selectedLesson = data.find((lesson) =>
    lesson.attendanceDate.some((date) => date.date === lessonDateId)
  );

  if (!selectedLesson) {
    return <h2 className={styles.error}>Ma'lumot topilmadi</h2>;
  }

  return (
    <div className={styles.container}>
      <LessonAttendanceTable selectedLesson={selectedLesson} lessonDateId={lessonDateId!} />
      <LessonAttendanceDetails selectedLesson={selectedLesson} lessonDateId={lessonDateId!} />
      </div>
  );
};

export default AttendanceLessonDetails;
