import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import CONSTANTS from "../../constants";
import "./ModeratorPage.css";
import {
  clearauth,
  getOffers,
  headerRequest,
} from "../../actions/actionCreator";
import SpinnerLoader from "../../components/Spinner/Spinner";

const ModeratorPage = (props) => {
  const logOutModer = () => {
    props.clearauth();
    props.history.replace("/login");
  };

  useEffect(() => props.getOffers(), []);
  return (
    <div>
      <div className="containerModerPage">
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          className="logoModerPage"
        />
        Moderator Page
        <Link style={{ textDecoration: "none" }}>
          <span onClick={logOutModer}>Logout</span>
        </Link>
      </div>
      <div>
        {props.offersList.isFetching ? (<SpinnerLoader />) : (<ul>
          {props.offersList.offers.map(offerObj => {
            if (offerObj.text && offerObj.fileName) {
              return <li>
                <h2>
                Contest id: {offerObj.contestId}
                </h2>
                <p>
                  Offer: {offerObj.text} 
                </p>
                <p>
                  User ID: {offerObj.userId} 
                </p>
                <img src="" alt="picture" />
              </li>;
            } else if (offerObj.text){
              return <li>
                <h2>
                Contest id: {offerObj.contestId}
                </h2>
                <p>
                  Offer: {offerObj.text} 
                </p>
                <p>
                  User ID: {offerObj.userId} 
                </p>
              </li>;
            } else if (offerObj.fileName){
              return <li>
                <h2>
                Contest id: {offerObj.contestId}
                </h2>
                <p>
                  User ID: {offerObj.userId} 
                </p>
                <img src="" alt="picture">
                </img>
              </li>;
            }
          })}
        </ul>) }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { offersList, auth } = state;
  return { auth, offersList };
};
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearauth: () => dispatch(clearauth()),
  getOffers: (data) => dispatch(getOffers(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModeratorPage)
);
