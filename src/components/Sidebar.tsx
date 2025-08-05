import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/aboutme">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
