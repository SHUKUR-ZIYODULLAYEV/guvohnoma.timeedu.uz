import { FromAttendanceJournal } from "../../types/types";
import styles from "./AttendanceDetails.module.css";

interface AttendanceDetailsProps {
  selectedData: FromAttendanceJournal;
}

const AttendanceDetails: React.FC<AttendanceDetailsProps> = ({ selectedData }) => {
  return (
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
  );
};

export default AttendanceDetails;
