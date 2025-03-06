import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AttendanceTable from "../../components/AttendanceTable/AttendanceTable";
import AttendanceDetails from "../../components/AttendanceDetails/AttendanceDetails";
import styles from "./AttendanceDetails.module.css";

const AttendanceJournalDetails = () => {
  const selectedData = useSelector((state: RootState) => state.attendanceJournal.selectedJournal);

  if (!selectedData) {
    return <div className={styles.container}>Ma'lumot topilmadi</div>;
  }

  return (
    <div className={styles.container}>
      <AttendanceTable selectedData={selectedData} />
      <AttendanceDetails selectedData={selectedData} />
    </div>
  );
};

export default AttendanceJournalDetails;
