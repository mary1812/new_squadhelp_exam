import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CONSTANTS from "../../constants";
import "./ModeratorPage.css";
import { clearauth, headerRequest } from '../../actions/actionCreator';


const ModeratorPage = (props) => {

  const logOutModer = () => {
    props.clearauth();
    props.history.replace('/login');
  };

  return (
    <div className="containerModerPage">
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
        className="logoModerPage"
      />
      Moderator Page
      <Link style={{textDecoration: 'none'}}>
      <span onClick={logOutModer}>Logout</span>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => state.auth;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearauth: () => dispatch(clearauth()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModeratorPage));

