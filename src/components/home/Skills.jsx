import React from 'react';
import styles from './Skills.module.css'; // Assuming the custom styles are in Skills.module.css
import TCSLogo from './tcs-logo.jpg'; // Path to the TCS logo

const ExperienceSection = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={`${styles.container} d-flex flex-column align-items-center`}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>

        <div className={`${styles.companyContainer} d-flex align-items-center justify-content-center mt-4`}>
          <h3 className={`${styles.companyName} ms-3`}>Tata Consultancy and Services</h3>
          <img src={TCSLogo} alt="TCS Logo" className={styles.companyLogo} />
        </div>

        <div className={`${styles.jobDetails} text-center mt-3`}>
          <p className={styles.jobTitle}>Front End Developer | Jul 2019 – Jul 2022</p>
          <ul className={`${styles.customList}`}>
            <li>
              <span className={styles.bullet}></span>
              Engineered responsive web applications using React.js and Node.js, improving website performance by 35%.
            </li>
            <li>
              <span className={styles.bullet}></span>
              Migrated PHP7 application to React.js, improving performance and UI/UX.
            </li>
            <li>
              <span className={styles.bullet}></span>
              Optimized database queries and implemented caching strategies, reducing API response time by 35%.
            </li>
            <li>
              <span className={styles.bullet}></span>
              Led a team of 3 developers in Agile, maintaining a bug-free deployment rate of 97%.
            </li>
            <li>
              <span className={styles.bullet}></span>
              Mentored 5 junior developers, increasing team productivity by 25%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
