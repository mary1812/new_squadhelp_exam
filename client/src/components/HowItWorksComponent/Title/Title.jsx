import React from 'react';
import styles from './Title.module.sass'
// import title from "../../../../public/staticImages/howItWorksImages/titleChange.png"
import CONSTANTS from '../../../constants';


const Title = () => {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <section>
        <small>World's #1 Naming Platform</small>
        <h1>How Does Squadhelp Work?</h1>
        <p>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
        <a className="text"> <span className="playVideo" ></span>  Play Video</a>
        </section>
        <section>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}titleChange.png`} alt="Smartphone" />
        </section>
      </div>
    </div>
  );
}

export default Title;
