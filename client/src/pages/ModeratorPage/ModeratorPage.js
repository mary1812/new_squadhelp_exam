import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import CONSTANTS from "../../constants";
import "./ModeratorPage.css";
import {
  clearauth,
  getOffers,
  headerRequest,
  setOfferStatusByModerator,
} from "../../actions/actionCreator";
import SpinnerLoader from "../../components/Spinner/Spinner";
import { Pagination, Box } from "@mui/material";
import Stack from '@mui/material/Stack';

const ModeratorPage = (props) => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const logOutModer = () => {
    props.clearauth();
    props.history.replace("/login");
  };

  const approveHandler = (offerObj) => {
    props.setOfferStatusByModerator({
      offerId: offerObj.id,
      command: CONSTANTS.OFFER_STATUS_VERIFIED,
      creatorId: offerObj.userId,
      contestId: offerObj.contestId,
    });

   updatePage(limit*(page-1));
  };

  const rejectHandler = (offerObj) => {
    props.setOfferStatusByModerator({
      offerId: offerObj.id,
      command: CONSTANTS.OFFER_STATUS_VOIDED,
      creatorId: offerObj.userId,
      contestId: offerObj.contestId,
    });

    updatePage(limit*(page-1));
  };

  const updatePage = (offset=0) => {
    props.getOffers({limit: limit, offset:offset});
  };

  useEffect(() => updatePage(), []);

  const pageChange = (e, p) => {
    setPage(p)
    updatePage(limit*(p-1))
  }
  return (
    <div className="containerModerPage">
      <div className="headerModerPage">
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          className="logoModerPage"
        />
        <p style={{ color: '#6e7072' }}>Moderator Page</p>
        <Link style={{ textDecoration: "none" }}>
          <span onClick={logOutModer}>Logout</span>
        </Link>
      </div>
      <div className="wrapContainerModerPage">
      
        <div className="judgeOffersModer">
          <button onClick={() => updatePage(limit*(page-1))} className="updateListOfferBtn"><i className="fas fa-history"/></button>
        {props.offersList.isFetching ? (
          <SpinnerLoader />
          ) : (
              <div>
          <ul className="ulOfferCard">
            {props.offersList.offers.map((offerObj) => {
              if (offerObj.text && offerObj.fileName) {
                return (
                  <li className="listOfferCard">
                    <div className="contentListOfferCard">
                      <h2 className="contestIdOffer">(#{offerObj.contestId})</h2>
                      <p>{offerObj.text}</p>
                      <img src="" alt="picture" className="imglistOfferCard"/>
                      </div>
                      <div className="decisionBtn">
                        <button onClick={() => approveHandler(offerObj)} className="verifiedButton">
                          Approve
                        </button>
                        <button onClick={() => rejectHandler(offerObj)} className="voidedButton">
                          Reject
                        </button>
                      </div>
                    
                  </li>
                );
              } else if (offerObj.text) {
                return (
                  <li className="listOfferCard">
                    <div className="contentListOfferCard">
                      <h2 className="contestIdOffer">(#{offerObj.contestId})</h2>
                      <p>{offerObj.text}</p>
                      </div>
                      <div className="decisionBtn">
                        <button onClick={() => approveHandler(offerObj)} className="verifiedButton">
                          Approve
                        </button>
                        <button onClick={() => rejectHandler(offerObj)} className="voidedButton">
                          Reject
                        </button>
                      </div>
                  </li>
                );
              } else if (offerObj.fileName) {
                return (
                  <li className="listOfferCard">
                    <div className="contentListOfferCard">
                      <h2 className="contestIdOffer">(#{offerObj.contestId})</h2>
                      <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" className="imglistOfferCard" alt="picture"></img>
                      </div>
                      <div className="decisionBtn">
                        <button onClick={() => approveHandler(offerObj)} className="verifiedButton">
                          Approve
                        </button>
                        <button onClick={() => rejectHandler(offerObj)} className="voidedButton">
                          Reject
                        </button>
                      </div>
                    
                  </li>
                );
              }
            })}
                </ul>
                  <Stack>
                  <Pagination
                    className="paginationEl"
                    count={Math.ceil(props.offersList.count / limit)}
                    page={page}
                    onChange={pageChange}
                    variant="outlined"
                    shape="rounded"
                  /></Stack>
                </div>
        )}
              </div> 
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { offersList, auth } = state;
  return { auth, offersList };
};
const mapDispatchToProps = (dispatch) => ({
  setOfferStatusByModerator: (data) =>
    dispatch(setOfferStatusByModerator(data)),
  getUser: () => dispatch(headerRequest()),
  clearauth: () => dispatch(clearauth()),
  getOffers: (data) => dispatch(getOffers(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModeratorPage)
);
