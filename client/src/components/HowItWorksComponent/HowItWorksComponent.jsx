import React from 'react';
import Title from './Title/Title';
import ServicesSection from './ServicesSection/ServicesSection';
import styles from './HowItWorksComponent.module.sass'
import ContestsWork from './ContestsWork/ContestsWork';
import Questions from './Questions/Questions';

const HowItWorksComponent = () => {
  return (
    <div className={styles.mainContainer}>
       <Title />
       <ServicesSection />
      <ContestsWork/>
      <Questions/>
    </div>
  );
}

export default HowItWorksComponent;


// className={styles.mainContainer}