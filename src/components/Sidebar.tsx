import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../store/sidebarSlice";
import styles from "./Sidebar.module.css";
import { FaBars, FaCalendarAlt, FaBook, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
      <button className={styles.toggleBtn} onClick={() => dispatch(toggleSidebar())}>
        <FaBars />
      </button>
      <div className={styles.menu}>
        <span className={styles.menuTitle}>
          <FaCalendarAlt /> Mashg‘ulotlar
        </span>
        <ul>
          <li>
            <FaBook />
            {isSidebarOpen && <span>Dars jadvali</span>}
          </li>
          <li>
            <FaBook />
            {isSidebarOpen && <span>Dars o'tish</span>}
          </li>
          <li>
            <FaChartBar />
            {isSidebarOpen && <span>Davomat jurnali</span>}
          </li>
          <li>
            <FaChartBar />
            {isSidebarOpen && <span>Baholash jurnali</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
