import AttendanceTable from "../../components/AttendanceTable/AttendanceTable";
import AttendanceDetails from "../../components/AttendanceDetails/AttendanceDetails";
import styles from "./AttendanceDetails.module.css";

const AttendanceJournalDetails = () => {
  return (
    <div className={styles.container}>
      <AttendanceTable />
      <AttendanceDetails />
    </div>
  );
};

export default AttendanceJournalDetails;
