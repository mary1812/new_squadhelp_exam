import React from "react";
import "./OfferCardForModerator.css";
import CONSTANTS from "./../../constants"

export default function OfferCardForModerator({ offerObj, rejectHandler, approveHandler }) {
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
            onClick={() => approveHandler(offerObj)}
            className="verifiedButton"
          >
            Approve
          </button>
          <button
            onClick={() => rejectHandler(offerObj)}
            className="voidedButton"
          >
            Reject
          </button>
        </div>
      </li>
    );
}
