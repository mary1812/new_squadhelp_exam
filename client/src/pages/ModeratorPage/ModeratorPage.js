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
import OfferCardForModerator from "../../components/OfferCardForModerator/OfferCardForModerator";

const ModeratorPage = (props) => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const logOutModer = () => {
    props.clearauth();
    props.history.replace("/login");
  };

  
  const moderationHandler = (offerObj, command) => {
    props.setOfferStatusByModerator({
      offerId: offerObj.id,
      command: command,
      creatorId: offerObj.userId,
      contestId: offerObj.contestId,
    });

    if (props.offersList.offers.length === 1 && page > 1) {
      updatePage(limit * (page - 2))
      setPage(prevState => prevState - 1 )
    } else {
       updatePage(limit*(page-1));
    }

  };

  const updatePage = (offset = 0) => {
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
                    return <OfferCardForModerator offerObj={offerObj} moderationHandler={moderationHandler} />
            })}
                </ul>
                  <Stack>
                  <Pagination
                    siblingCount={0}
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
