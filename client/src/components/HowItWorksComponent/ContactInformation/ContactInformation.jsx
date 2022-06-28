import React from "react";
import CONSTANTS from "../../../constants";
import styles from "./ContactInformation.module.sass";

const ContactInformation = () => {
  return (
    <div>
      <div className="row no-gutters align-items-lg-center justify-content-center mb-5 mt-5">
        <div className="col-lg-6 shadow-lg rounded">
          <div className="py-5 px-5 px-sm-9">
            <ul className={`${styles.contactInfo} list-unstyled p-0`}>
              <li className={`${styles.media} pt-3 pb-3`}>
                <span
                  className={`${styles.btnSoftPrimary} btn btn-sm btn-icon rounded-circle p-0`}
                >
                  <span
                    className={`${styles.fasBtn} fas fa-angle-right btn-icon__inner `}
                  ></span>
                </span>
                <div className="media-body">
                  <h4 className="h5 mb-1">
                    Pay a Fraction of cost vs hiring an agency
                  </h4>
                  <p className={`${styles.small} mb-4`}>
                    For as low as $199, our naming contests and marketplace
                    allow you to get an amazing brand quickly and affordably.
                  </p>
                </div>
              </li>

              <li className="border-top py-3" />
              <li className={styles.media}>
                <span
                  className={`${styles.btnSoftPrimary} btn btn-sm btn-icon rounded-circle p-0`}
                >
                  <span
                    className={`${styles.fasBtn} fas fa-angle-right btn-icon__inner `}
                  ></span>
                </span>
                <div className="media-body">
                  <h4 className="h4 mb-1">Satisfaction Guarantee</h4>
                  <p className="small mb-4">
                    Of course! We have policies in place to ensure that you are
                    satisfied with your experience.{" "}
                    <a href="/" data-modal-effect="fadein">
                      Learn more
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 bg-primary">
          <div className={`${styles.blueContainer}`}>
            <ul className={`${styles.listBlueContainer}`}>
              <li className="media pb-1">
                <div className="media-body">
                  <h4 className="h2 text-white mb-2">Questions?</h4>
                  <p className="text-white small">
                    Speak with a Squadhelp platform expert to learn more and get
                    your questions answered.
                  </p>
                  <button className="btn btn-white bg-white text-primary shadow-soft">
                    Schedule Consultation
                  </button>
                  <br />
                  <a href="tel:(877) 355-3585" className="clus text-white small">
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}phoneIcon.svg`}
                      alt="phone icon"
                    />
                    {" "}(877) 355-3585
                  </a>
                  <br />
                  <span className="text-white mt-2 d-inline-block small">
                    Call us for assistance
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
