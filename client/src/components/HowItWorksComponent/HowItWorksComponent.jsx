import React from 'react';
import Title from './Title/Title';
import styles from './HowItWorksComponent.module.sass'
const HowItWorksComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
       <Title />
      </div>
    </div>
  );
}

export default HowItWorksComponent;
