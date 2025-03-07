import { useParams } from "react-router-dom";
import LessonAttendanceTable from "../../components/LessonAttendanceTable/LessonAttendanceTable";
import LessonAttendanceDetails from "../../components/LessonAttendanceDetails/LessonAttendanceDetails";
import styles from "./AttendanceLessonDetails.module.css";
import { data } from "../../data/data";
import { FromAttendanceJournal, AttendanceDate } from "../../types/types";

const AttendanceLessonDetails = () => {
  const { lessonDateId, lessonPair } = useParams();

  // lessonDateId bo‘yicha kerakli ma'lumotlarni olish
  const selectedLesson: FromAttendanceJournal | undefined = data.find((lesson) =>
    lesson.attendanceDate.some((date) => date.date === lessonDateId)
  );

  if (!selectedLesson) {
    return <h2 className={styles.error}>Ma'lumot topilmadi</h2>;
  }

  return (
    <div className={styles.container}>
      <LessonAttendanceTable 
        selectedLesson={selectedLesson} 
        lessonDateId={lessonDateId!} 
        lessonPair={lessonPair!}  />
      <LessonAttendanceDetails 
        selectedLesson={selectedLesson} 
        lessonDateId={lessonDateId!} 
        lessonPair={lessonPair!} 
      />
    </div>
  );
};

export default AttendanceLessonDetails;
