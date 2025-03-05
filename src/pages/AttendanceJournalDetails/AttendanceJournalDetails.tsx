import { useSelector } from "react-redux";
import styles from "./AttendanceDetails.module.css";
import { RootState } from "../../store";
import { FromAttendanceJournal, AttendanceDate, Student, InfoAttendance } from "../../types/types"; // Agar `types.ts` fayl bo'lsa

const AttendanceJournalDetails = () => {
  const selectedData: FromAttendanceJournal | null = useSelector(
    (state: RootState) => state.attendanceJournal.selectedJournal
  );

  if (!selectedData) {
    return <div className={styles.container}>Ma'lumot topilmadi</div>;
  }

  return (
    <div className={styles.container}>
      {/* Jadval qismi */}
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
                <th key={index}>{dateInfo.date}</th>
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
            {/* Checkbox qatori */}
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

      {/* Ma'lumot paneli */}
      <div className={styles.detailsContainer}>
        <table className={styles.detailsTable}>
          <tbody>
            <tr>
              <th>Guruh</th>
              <td>{selectedData.group}</td>
            </tr>
            <tr>
              <th>Fanlar</th>
              <td>{selectedData.subject}</td>
            </tr>
            <tr>
              <th>Mashg‘ulot</th>
              <td>{selectedData.type}</td>
            </tr>
            <tr>
              <th>Xodim</th>
              <td>{selectedData.employee}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceJournalDetails;
