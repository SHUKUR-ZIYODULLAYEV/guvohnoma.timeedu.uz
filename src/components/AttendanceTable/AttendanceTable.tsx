import { useNavigate } from "react-router-dom";
import { FromAttendanceJournal, AttendanceDate, Student, InfoAttendance } from "../../types/types";
import styles from "./AttendanceTable.module.css";

interface AttendanceTableProps {
  selectedData: FromAttendanceJournal;
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ selectedData }) => {
  const navigate = useNavigate();

  const handleDateClick = (lessonDateId: string) => {
    console.log("Clicked date:", lessonDateId);
    navigate(`/attendance-journal/1/${lessonDateId}`);
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
            <th colSpan={selectedData.attendanceDate?.length || 0}>Dars sanasi</th>
          </tr>
          <tr>
            {selectedData.attendanceDate?.map((dateInfo: AttendanceDate, index: number) => (
              <th key={index}>
                <button
                  className={styles.dateButton}
                  onClick={() => handleDateClick(dateInfo.date)}
                >
                  {dateInfo.date}
                </button>
              </th>
            ))}
          </tr>
          <tr>
            {selectedData.attendanceDate?.map((dateInfo: AttendanceDate, index: number) => (
              <th key={index}>
                <div className={styles.lessonPair}>{dateInfo.pair}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedData.groupStudents.map((student: Student, studentIndex: number) => (
            <tr key={studentIndex}>
              <td>{studentIndex + 1}</td>
              <td>{student.fullname}</td>
              <td>{student.s ?? ""}</td>
              <td>{student.sz ?? ""}</td>
              {student.infoattendance.map((info: InfoAttendance, index: number) => (
                <td key={index}>
                  {info.attendance !== null ? (
                    <span className={styles.absent}>{info.attendance}</span>
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            {selectedData.attendanceDate?.map((att: AttendanceDate, index: number) => (
              <td key={index}>
                {att.status ? (
                  <input type="checkbox" className={styles.checkbox} checked disabled />
                ) : null}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
