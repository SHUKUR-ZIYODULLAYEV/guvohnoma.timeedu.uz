import { useState } from "react";
import styles from "./AttendanceJournal.module.css";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedJournal } from "../../store/attendanceJournalSlice";
import { FromAttendanceJournal } from "../../types/types";

const AttendanceJournal = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedSemester, setSelectedSemester] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRowClick = (id: number) => {
    const selectedItem: FromAttendanceJournal | undefined = data.find(
      (item) => item.id === id
    );
    if (selectedItem) {
      dispatch(setSelectedJournal(selectedItem)); // ✅ To‘liq obyekt yuboriladi
      navigate(`/attendance-journal/${id}`);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.year === selectedYear &&
      (selectedSemester === "" || item.semester === selectedSemester)
  );

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className={styles.select}
        >
          <option value="2024-2025">2024-2025</option>
          <option value="2023-2024">2023-2024</option>
        </select>

        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className={styles.select}
        >
          <option value="">Semestrni tanlang</option>
          <option value="1-semestr">1-semestr</option>
          <option value="2-semestr">2-semestr</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Guruh</th>
            <th>Fanlar</th>
            <th>Mashg‘ulot</th>
            <th>O‘quv yili</th>
            <th>Semestr</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{index + 1}</td>
              <td>{item.group}</td>
              <td>{item.subject}</td>
              <td>{item.type}</td>
              <td>{item.year}</td>
              <td>{item.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {filteredData.length > 0
          ? `1-${filteredData.length} / jami ${filteredData.length} ta`
          : "Ma'lumot topilmadi"}
      </div>
    </div>
  );
};

export default AttendanceJournal;