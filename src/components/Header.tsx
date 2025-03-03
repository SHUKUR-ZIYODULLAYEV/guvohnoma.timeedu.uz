import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Guvohnoma OTM</h1>
      <span className={styles.language}>O'zbekcha</span>
      <div className={styles.user}>
        <img src="/images/profile.jpg" alt="User" />
        <div>
          <strong>SHUKUR ZIYODULLAYEV</strong>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
