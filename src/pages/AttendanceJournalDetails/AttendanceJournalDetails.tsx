// import { useSelector } from "react-redux";
// import { RootState } from "../../store";
// import styles from "./AttendanceDetails.module.css";

// const AttendanceJournalDetails = () => {
//   const selectedJournal = useSelector(
//     (state: RootState) => state.attendanceJournal.selectedJournal
//   );
// console.log(selectedJournal);

//   if (!selectedJournal) {
//     return <div className={styles.error}>Jurnal ma’lumoti topilmadi.</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <h2>Jurnal Tafsilotlari</h2>
//       <div className={styles.details}>
//         <p><strong>Guruh:</strong> {selectedJournal.group}</p>
//         <p><strong>Fan:</strong> {selectedJournal.subject}</p>
//         <p><strong>Mashg‘ulot:</strong> {selectedJournal.type}</p>
//         <p><strong>O‘quv yili:</strong> {selectedJournal.year}</p>
//         <p><strong>Semestr:</strong> {selectedJournal.semester}</p>
//         <p><strong>Xodim:</strong> {selectedJournal.employee}</p>
//       </div>

//       <h3>Talabalar Ro‘yxati</h3>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>F.I.Sh.</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedJournal.groupStudents.map((student: any, index: number) => (
//             <tr key={student.id}>
//               <td>{index + 1}</td>
//               <td>{student.fullname}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AttendanceJournalDetails;


import styles from "./AttendanceDetails.module.css";

const AttendanceJournalDetails = () => {
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
              <th colSpan={4}>Dars sanasi</th>
            </tr>
            <tr>
              <th>2025-01-27</th>
              <th>2025-01-29</th>
              <th>2025-01-29</th>
              <th>2025-01-29</th>
            </tr>
            <tr>
              <th>
                <div className={styles.lessonPair}>1. 09:00-10:20</div>
              </th>
              <th>
                <div className={styles.lessonPair}>1. 09:00-10:20</div>
                
              </th>
              <th>
                <div className={styles.lessonPair}>1. 09:00-10:20</div>
              </th>
              <th>
                <div className={styles.lessonPair}>4. 13:50-15:10</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TEST1 TEST1 TEST1</td>
              <td></td>
              <td></td>
              <td>
                
              </td>
              <td>
                
              </td>
              <td>
                
              </td>
              <td>
               
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>TEST2 TEST2 TEST2</td>
              <td></td>
              <td><span className={styles.absent}>2</span></td>
              <td>
              <span className={styles.absent}>2</span>
              </td>
              <td>
              <span className={styles.absent}>2</span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type="checkbox" className={styles.checkbox} />
              </td>
              <td>
                <input type="checkbox" className={styles.checkbox} />
              </td>
              <td></td>
              <td></td>
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
              <td>TEST GURUH</td>
            </tr>
            <tr>
              <th>Fanlar</th>
              <td>Auditga kirish</td>
            </tr>
            <tr>
              <th>Mashg‘ulot</th>
              <td>Ma’ruza</td>
            </tr>
            <tr>
              <th>Xodim</th>
              <td>ZIYODULLAYEV SHUKUR SAYDULLO O‘G‘LI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceJournalDetails;
