import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../store/sidebarSlice";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import { FaBars, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item); // ✅ Element tanlangan bo‘ladi
  };

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
      <button
        className={styles.toggleBtn}
        onClick={() => {
          dispatch(toggleSidebar());
          setDropdownOpen(false); // ✅ Sidebar yopilganda dropdown ham yopiladi
        }}
      >
        <FaBars />
      </button>
      
      <div className={styles.menu}>
        {/* 🔽 Mashg‘ulotlar tugmasi */}
        <div className={styles.dropdownButton} onClick={toggleDropdown}>
          <FaCalendarAlt />
          {isSidebarOpen && <span>Mashg‘ulotlar</span>}
        </div>

        {/* 🔽 Dropdown menyu */}
        <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.openDropdown : ""}`}>
          <li
            className={selectedItem === "jadval" ? styles.active : ""}
            onClick={() => handleSelect("jadval")}
          >
            <div className={`${styles.radio} ${selectedItem === "jadval" ? styles.filledRadio : ""}`}></div>
            <span>Dars jadvali</span>
          </li>
          <li
            className={selectedItem === "dars" ? styles.active : ""}
            onClick={() => handleSelect("dars")}
          >
            <div className={`${styles.radio} ${selectedItem === "dars" ? styles.filledRadio : ""}`}></div>
            <span>Dars o'tish</span>
          </li>
          <li
            className={selectedItem === "davomat" ? styles.active : ""}
            onClick={() => handleSelect("davomat")}
          >
            <div className={`${styles.radio} ${selectedItem === "davomat" ? styles.filledRadio : ""}`}></div>
            <span>Davomat jurnali</span>
          </li>
          <li
            className={selectedItem === "baholash" ? styles.active : ""}
            onClick={() => handleSelect("baholash")}
          >
            <div className={`${styles.radio} ${selectedItem === "baholash" ? styles.filledRadio : ""}`}></div>
            <span>Baholash jurnali</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
