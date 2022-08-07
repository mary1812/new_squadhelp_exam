import React from "react";
import "./OfferCardForModerator.css";
import CONSTANTS from "./../../constants"

export default function OfferCardForModerator({ offerObj, moderationHandler }) {
  console.log(offerObj)
    return (
      <li className="listOfferCard">
        <div className="contentListOfferCard">
          <h2 className="contestIdOffer">(#{offerObj.id})</h2>
          {offerObj.text ? <p className="textOffer">{offerObj.text}</p> : <img
            src={`${CONSTANTS.publicURL}${offerObj.fileName}`}
            className="imglistOfferCard"
            alt="picture"
          ></img>}
        </div>
        <div className="decisionBtn">
          <button
            onClick={() => moderationHandler(offerObj, CONSTANTS.OFFER_STATUS_VERIFIED)}
            className="verifiedButton"
          >
            Approve
          </button>
          <button
            onClick={() => moderationHandler(offerObj, CONSTANTS.OFFER_STATUS_VOIDED)}
            className="voidedButton"
          >
            Reject
          </button>
        </div>
      </li>
    );
}
