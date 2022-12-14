import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import ContactFooter from "@/components/contactFooter";
import Layout from "@/components/layout";
import useMenu from "@/contexts/useMenu";
import { useBodyScroll, useBodyScrollLock } from "@/hooks/useBodyScroll";

import styles from "@/pages/about/style.module.scss";


const AboutPage = () => {
  const [skills, setSkills] = useState([
    {
      name: "React & React Native",
      url: "https://reactjs.org/",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Angular",
      url: "https://angular.io/",
    },
    {
      name: "NestJS",
      url: "https://nestjs.com/",
    },
    {
      name: "Ux - Ui design",
    },
    {
      name: "Illustration",
    },
    {
      name: "Photography",
    },
    {
      name: "Video montage",
    },
    {
      name: "Web marketing",
    },
    {
      name: "Marketing",
    },
    {
      name: "SEO",
    },
  ])

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);

  const { isOpen } = useMenu();

  useBodyScroll(isOpen);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    gsap.fromTo(titleRef.current, {opacity: 0}, {opacity: 1, duration: 6, delay: 1, ease: 'power4.out'});
    gsap.fromTo(descriptionRef.current, {opacity: 0}, {opacity: 1, duration: 6, delay: 1.5, ease: 'power4.out'});
    gsap.fromTo(nameRef.current, {opacity: 0}, {opacity: 1, duration: 6, delay: 2, ease: 'power4.out'});
    gsap.fromTo(contentRef.current, {opacity: 0}, {opacity: 1, duration: 6, delay: 2.5, ease: 'power4.out'});
  }, []);

  return (
    <Layout
      title={"Create Next App"}
      description={"Generated by create next app"}
    >
      <main className={styles.container}>
        <div className={styles.titleContent}>
          <h1 className={styles.title} ref={titleRef}>About me</h1>
          <p className={styles.description} ref={descriptionRef}>I’m self-taugh creative developer and Ux -Ui designer</p>
        </div>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.subtitle} ref={nameRef}>Cyriac du Chatenet</h2>
            <p className={styles.text} ref={contentRef}>Hello, i’m french fullstack developper and Ux - Ui designer. I have started to create a lot of wireframes since 2019 and create frontend part of website since 2020.
            <br /> Passionate by computer science since i was kid, I work in a lot of project at ESD Bordeaux during my cursus of digital project manager. <br/> <br />
            I work in a lot of project in photography, video montage, shooting film, Ux - Ui design, web developement, illustration. <br /> <br />
            Since september 2022, i am in app designer & developer cursus, I’m valedictorian in web development. alongside of my cursus I started to learn mobile app developement in React Native. <br /> <br />
            During my cursus i was intership in web developement at Legrand beetween february and april 2021. I was app UAT tester. <br /> <br />
            Between may and august 2022 i was internship in web developement, I have helped to migrate application between AngularJS and Angular 14. <br /> <br />
            Finally since september 2022 i’m in apprenticeship in web and mobile developement at Dotmind. I create bookshelf app in React and React Native.</p>
          </div>
          <img src="https://avatars.githubusercontent.com/u/83903574?v=4" alt="" className={styles.profilePicture} />
        </div>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill) => <li className={styles.skill} key={skill.name}><a href={skill.url} target={'_blank'} className={styles.skillLink} rel="noreferrer">{skill.name}</a></li>)}
          </ul>
        </div>
      </main>
      <ContactFooter />
    </Layout>
  );
};

export default AboutPage;
