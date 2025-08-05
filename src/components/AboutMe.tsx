import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>
          This is the about me section. Where my education and internships will
          be shown.
        </p>
        <h2>Education</h2>
        <p>Computer Engineering - Aalborg University - 2020-2023</p>
        <h2>Experience</h2>
        <h3>Intern - Software Development - Marketisr - 2024</h3>
        <p>
          Worked on developing a webapplication that was to only run locally on
          their machine.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
