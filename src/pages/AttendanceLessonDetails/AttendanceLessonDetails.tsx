import LessonAttendanceTable from "../../components/LessonAttendanceTable/LessonAttendanceTable";
import LessonAttendanceDetails from "../../components/LessonAttendanceDetails/LessonAttendanceDetails";
import styles from "./AttendanceLessonDetails.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AttendanceLessonDetails = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);
  const lessonDateId = useSelector((state: RootState) => state.attendanceJournal.lessonDateId);
  const lessonPair = useSelector((state: RootState) => state.attendanceJournal.lessonPair);

  if (!selectedData || !lessonDateId || !lessonPair) {
    return <h2 className={styles.error}>Ma'lumot topilmadi</h2>;
  }

  return (
    <div className={styles.container}>
      <LessonAttendanceTable />
      <LessonAttendanceDetails />
    </div>
  );
};

export default AttendanceLessonDetails;
