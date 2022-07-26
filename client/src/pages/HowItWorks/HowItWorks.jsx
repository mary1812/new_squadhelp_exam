import React from 'react';
import { connect } from 'react-redux';
import HowItWorksComponent from '../../components/HowItWorksComponent/HowItWorksComponent';

const HowItWorks = (props) => {
  if (props && props.data && props.data.role && props.data.role === 'moderator') {
    props.history.replace("/moderation")
  }
  return (
    <div>
      <div>
        <HowItWorksComponent/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { data } = state.auth;
  return { data };
};

export default connect(mapStateToProps, null)(HowItWorks);

