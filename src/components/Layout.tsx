import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarOpen = useSelector((state: any) => state.sidebar.isSidebarOpen);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={`${styles.main} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
