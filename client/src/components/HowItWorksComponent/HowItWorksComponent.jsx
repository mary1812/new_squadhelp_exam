import React from "react";
import Title from "./Title/Title";
import ServicesSection from "./ServicesSection/ServicesSection";
import styles from "./HowItWorksComponent.module.sass";
import ContestsWork from "./ContestsWork/ContestsWork";
import Questions from "./Questions/Questions";
import StatInformation from "./StatInformation/StatInformation";
import { Container } from "react-bootstrap";

const HowItWorksComponent = () => {
  return (
    <Container>
      <div className={styles.mainContainer}>
        <Title />
        <ServicesSection />
        <ContestsWork />
        <Questions />
        <StatInformation />
      </div>
    </Container>
  );
};

export default HowItWorksComponent;

// className={styles.mainContainer}
