import React from "react";
import CONSTANTS from "../../../constants";
import styles from "./ContestsWork.module.sass"

const ContestsWork = () => {
  return (
    <div className="container space-2 space-md-3 py-5 ">
      
      <div className="text-center">
        <img
          className="mx-auto"
          src={`${CONSTANTS.STATIC_IMAGES_PATH}logoApplicationStages.png`}
          alt="left"
        />
        <h2 className="h2 fw-normal my-3">How Do Naming Contests Work?</h2>
      </div>

      <div className="row justify-content-lg-between align-items-center py-5">
        <div className="col col-lg-6">
          <img
            className="mx-auto me-5"
            src={`${CONSTANTS.STATIC_IMAGES_PATH}bigPictureApplicationStages.png`}
            alt="left"
          />
          {/* <img
            className="mx-auto"
            src={`${CONSTANTS.STATIC_IMAGES_PATH}liApplicationStages.png`}
            alt="list group"
          /> */}
        </div>

        <div className="col col-lg-5 row justify-content-lg-between align-items-center">
          
          <ul className={styles.contestList}>
            <li className="u-indicator-steps py-3">
              <div className="d-inline-flex border media align-items-center rounded p-4">
              <span className="display-4 text-primary fw-normal me-3 ">1.</span>
                <p>
                  Fill out your Naming Brief and begin receiving name ideas in
                  minutes</p>
              </div>
            </li>

            <li className="u-indicator-steps py-3">
              <div className="d-inline-flex media align-items-center border rounded p-4">
              <span className="display-4 text-primary fw-normal me-3 ">2.</span>
                <p>
                Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.
                </p>
              </div>
            </li>

            <li className="u-indicator-steps py-3">
              <div className="d-inline-flex media align-items-center border rounded p-4">
              <span className="display-4 text-primary fw-normal me-3 ">3.</span>
                <p>
                Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.
                </p>
              </div>
            </li>

            <li className="u-indicator-steps py-3">
              <div className="d-inline-flex media align-items-center border rounded p-4">
              <span className="display-4 text-primary fw-normal me-3 ">4.</span>
                <p>
                Pick a Winner. The winner gets paid for their submission.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContestsWork;