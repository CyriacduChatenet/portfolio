import Layout from "@/components/layout";

import styles from "@/styles/Home.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Layout
        title={"Create Next App"}
        description={"Generated by create next app"}
      >
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>Creative</p>
              <p className={styles.devTitle}>Developer</p>
            </div>
            <p className={styles.description}>
              Ux - Ui designer X developper fullstack
            </p>
          </div>
          <div className={styles.about}>
            <p className={styles.time}>765h of developement</p>
            <a href="" className={styles.talksButton} id={styles.mobileLink}>
              My last talk
            </a>
            <div id={styles.desktopLink}>
              <button className={styles.talksButton}>My last talk</button>
              <a href="" className={styles.meetupLink}>How design token will change our life as designer / developper ?  </a>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default HomePage;
