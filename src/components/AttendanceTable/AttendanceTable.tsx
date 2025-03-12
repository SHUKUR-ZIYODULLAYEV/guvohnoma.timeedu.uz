import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import styles from "./AttendanceTable.module.css";
import { useNavigate } from "react-router-dom";
import { setSelectedLesson } from "../../store/attendanceJournalSlice";

const AttendanceTable: React.FC = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  if (!selectedData) {
    return <div>Ma'lumot topilmadi</div>;
  }

  const handleDateClick = (lessonDateId: string, lessonPair: string) => {
    dispatch(setSelectedLesson({ lessonDateId, lessonPair }));
    navigate(`/attendance-journal/${selectedData.id}/${lessonDateId}/${lessonPair}`);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={3}>№</th>
            <th rowSpan={3}>Talabaning F.I.Sh.</th>
            <th rowSpan={3}>S</th>
            <th rowSpan={3}>SZ</th>
            <th colSpan={selectedData.attendanceDate.length}>Dars sanasi</th>
          </tr>
          <tr>
            {selectedData.attendanceDate.map((dateInfo, index) => (
              <th key={index}>
                <button
                  className={styles.dateButton}
                  onClick={() => handleDateClick(dateInfo.date, dateInfo.pair)}
                >
                  {dateInfo.date}
                </button>
              </th>
            ))}
          </tr>
          <tr>
            {selectedData.attendanceDate.map((dateInfo, index) => (
              <th key={index} className={styles.lessonPair}>{dateInfo.pair}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedData.groupStudents.map((student, studentIndex) => (
            <tr key={student.id}>
              <td>{studentIndex + 1}</td>
              <td>{student.fullname}</td>
              <td>{student.s ?? ""}</td>
              <td>{student.sz ?? ""}</td>
              {selectedData.attendanceDate.map((dateInfo, dateIndex) => {
                const studentAttendance = student.infoattendance.find(
                  (info) => info.date === dateInfo.date && info.pair === dateInfo.pair
                );

                return (
                  <td key={dateIndex}>
                    {studentAttendance ? (
                      <span className={styles.absent}>{studentAttendance.attendance ?? "-"}</span>
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr>
            <td colSpan={4}></td>
            {selectedData.attendanceDate.map((att, index) => (
              <td key={index}>
                <input type="checkbox" className={styles.checkbox} checked={att.status} disabled />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
