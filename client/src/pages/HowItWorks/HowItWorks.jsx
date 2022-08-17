import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HowItWorksComponent from '../../components/HowItWorksComponent/HowItWorksComponent';

const HowItWorks = (props) => {
  if (props && props.data && props.data.role && props.data.role === 'moderator') {
    props.history.replace("/moderation")
  }
  return (
    <div>
      <div>
        <Header />
        <HowItWorksComponent />
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { data } = state.auth;
  return { data };
};

export default connect(mapStateToProps, null)(HowItWorks);
