import React from "react";
import styles from "./StatInformation.module.sass";
import CONSTANTS from "../../../constants";

const StatInformation = () => {
  return (
    <div>
      <div className="pb-5 pt-2">
        <div className="row justify-content-lg-center">
          <div className="col-md-4 mb-7 mb-lg-0">
            <div className="u-indicator-vertical-line text-center px-5">
              <img
                className="mx-auto mb-3"
                style={{ height: "72px", width: "77px" }}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}stars.svg`}
              ></img>
              <p className={`mb-0 ${styles.pStatInfo}`}>
                <span className="text-dark">4.9 out of 5 stars</span>{" "}
                from 25,000+ customers.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-7 mb-lg-0">
            <div className="u-indicator-vertical-line text-center px-5">
              <img
                className="mx-auto mb-3"
                style={{ height: "72px", width: "77px" }}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}peoplesInfo.png`}
              ></img>
              <p className={`mb-0 ${styles.pStatInfo}`}>
                Our branding community <br /> stands
                <span className="text-dark"> 200,000+</span> strong.
              </p>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <div className="text-center">
              <img
                className="mx-auto mb-3"
                style={{ height: "72px", width: "77px" }}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}sharingFiles.svg`}
              ></img>
              <p className="mb-0">
                <span className="text-dark"> 140+ Industries </span>
                supported <br/> across more than
                <span className="text-dark"> 85 countries</span> -
                and counting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatInformation;
