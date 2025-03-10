import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./AttendanceDetails.module.css";

const AttendanceDetails: React.FC = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);

  if (!selectedData) {
    return <div>Ma'lumot topilmadi</div>;
  }

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
