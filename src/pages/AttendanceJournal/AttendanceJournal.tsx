import { useState } from "react";
import styles from "./AttendanceJournal.module.css";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedJournal } from "../../store/attendanceJournalSlice";
const AttendanceJournal = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedSemester, setSelectedSemester] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRowClick = (id: number) => {
    dispatch(setSelectedJournal(id));
    navigate(`/attendance-journal/${id}`);
  };
  // const data = [
  //   { id: 1, group: "TEST GURUH", subject: "Auditga kirish", type: "Ma’ruza", year: "2024-2025", semester: "1-semestr" },
  //   { id: 2, group: "TEST GURUH", subject: "Auditga kirish", type: "Amaliy", year: "2024-2025", semester: "1-semestr" },
  //   { id: 3, group: "TEST GURUH", subject: "Audit", type: "Ma’ruza", year: "2024-2025", semester: "1-semestr" },
  //   { id: 4, group: "TEST GURUH", subject: "Audit", type: "Amaliy", year: "2024-2025", semester: "1-semestr" },
  // ];

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className={styles.select}>
          <option value="2024-2025">2024-2025</option>
          <option value="2023-2024">2023-2024</option>
        </select>

        <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)} className={styles.select}>
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
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleRowClick(item.id)}>
            <td>{item.id}</td>
            <td>{item.group}</td>
            <td>{item.subject}</td>
            <td>{item.type}</td>
            <td>{item.year}</td>
            <td>{item.semester}</td>
          </tr>
        ))}
      </tbody>
      </table>

      <div className={styles.pagination}>1-4 / jami 4 ta</div>
    </div>
  );
};

export default AttendanceJournal;
