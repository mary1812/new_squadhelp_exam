import React from "react";
import Title from "./Title/Title";
import ServicesSection from "./ServicesSection/ServicesSection";
import styles from "./HowItWorksComponent.module.sass";
import ContestsWork from "./ContestsWork/ContestsWork";
import Questions from "./Questions/Questions";
import StatInformation from "./StatInformation/StatInformation";
import { Container } from "react-bootstrap";
import GetStarted from "./GetStarted/GetStarted";
import ContactInformation from "./ContactInformation/ContactInformation";
import Footer from "./Footer/Footer";

const HowItWorksComponent = () => {
  return (
    <div>
      <Container className={styles.mainContainer}>
        <Title />
        <ServicesSection />
      </Container>

      <ContestsWork className={styles.ctnContainerWrap } />

      <Container className={` px-0 ${styles.mainContainer}`}>
      <Questions />
      </Container>
 
        <GetStarted />
   
      <Container className={styles.mainContainer}>
        <StatInformation/>
        <ContactInformation/>
        <Footer />
      </Container>
    </div>
  );
};

export default HowItWorksComponent;
