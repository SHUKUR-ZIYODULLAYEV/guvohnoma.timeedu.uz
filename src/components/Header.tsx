import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { logout } from "../store/authSlice";
import styles from "./Header.module.css";

const Header = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${styles.languageSelector}`) &&
        !target.closest(`.${styles.profile}`) &&
        !target.closest(`.${styles.logo}`)
      ) {
        setLanguageDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => navigate("/")}
      >
        Guvohnoma OTM
      </div>

      <div className={styles.headerRight}>
        <div
          className={styles.languageSelector}
          onClick={(e) => {
            e.stopPropagation();
            setLanguageDropdownOpen(!isLanguageDropdownOpen);
            setProfileDropdownOpen(false);
          }}
        >
          O‘zbekcha
          {isLanguageDropdownOpen && (
            <ul className={styles.dropdown}>
              <li>English</li>
              <li>Русский</li>
            </ul>
          )}
        </div>

        <div
          className={styles.profile}
          onClick={(e) => {
            e.stopPropagation();
            setProfileDropdownOpen(!isProfileDropdownOpen);
            setLanguageDropdownOpen(false);
          }}
        >
          <img src="/images/profile.jpg" alt="User" className={styles.avatar} />
          <div className={styles.userInfo}>
            <span className={styles.username}>SHUKUR ZIYODULLAYEV</span>
            <span className={styles.role}>Admin</span>
          </div>

          {isProfileDropdownOpen && (
            <ul className={styles.profileDropdown}>
              <li className={styles.dropdownTitle}>Foydalanuvchi rollari</li>
              <li>API User</li>
              <li>Kadrlar bo'limi</li>
              <li>Kafedra mudiri</li>
              <li>O‘qituvchi</li>
              <li className={styles.activeRole}>Registrator ofisi</li>
              <hr />
              <li>Profil</li>
              <li className={styles.logout} onClick={handleLogout}>
                <span>↩️</span> Chiqish
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
