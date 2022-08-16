import React from "react";
// import { Footer } from 'react-bootstrap/lib/Modal';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HowItWorksComponent from "../../components/HowItWorksComponent/HowItWorksComponent";
import styles from "./HowItWorks.module.sass";

const HowItWorks = () => {
  return (
    <div>
      <div>
        <Header />
        <HowItWorksComponent />
        <Footer />
      </div>
    </div>
  );
};

export default HowItWorks;
