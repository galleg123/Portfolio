import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          <li>
            <a href="/Portfolio/projects">Projects</a>
          </li>
          <li>
            <a href="/Portfolio/aboutme">About</a>
          </li>
          <li>
            <a href="/Portfolio/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
