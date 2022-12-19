import { useEffect, useRef } from "react";
import gsap from "gsap";

import Header from "@/components/header";
import Layout from "@/components/layout";
import ContactFooter from "@/components/contactFooter";

import styles from "@/pages/talks/style.module.scss";


const TalksPage = () => {
  return (
    <Layout
    title={"Create Next App"}
    description={"Generated by create next app"}
  >
    <div>Talks page</div>
    <ContactFooter />
  </Layout>
  );
};

export default TalksPage;
