import React from "react";
import CONSTANTS from "../../../constants";
import { Row, Col } from "react-bootstrap";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <Row classname="row align-items-lg-center mb-4">
      <Col className="col-md-3 col-lg-4">
        <div className="pl-md-4">
          <h6 className="h3 pt-5">Featured In</h6>
        </div>
      </Col>
      <Col className="col-md-6 col-lg-7 mb-5 mb-md-0">
        <Col className="pt-5 row justify-content-center border-top space-top-1">
          <div className="col-4 col-lg-3 mb-4 mb-lg-0">
            <a href="http://www.forbes.com/sites/forbestreptalks/2016/07/11/not-sure-how-to-name-a-startup-squadhelp-will-crowdsource-it-for-199">
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}forbes.svg`}
                alt="Forbes icon"
                className={styles.forbesImg}
              />
            </a>
            </div>
          <div className="col-4 col-lg-3 mb-4 mb-lg-0">
            <a href="https://thenextweb.com/news/crowdsource-startup-name-with-squadhelp">
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}TNW.svg`}
                alt="TNW icon"
                className={styles.tnwImg}
              />
            </a>
          </div>
          <div className="col-4 col-lg-3 mb-4 mb-lg-0">
            <a href="http://www.chicagotribune.com/bluesky/originals/ct-squadhelp-startup-names-bsi-20170331-story.html">
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}chicago.svg`}
                alt="chicago icon"
                className={styles.chicagoImg}
              />
            </a>
          </div>
          <div className="col-4 col-lg-3 mb-4 mb-lg-0">
            <a href="http://mashable.com/2011/04/01/make-money-crowdworking/">
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}Mashable.svg`}
                alt="Mashable icon"
                className={styles.mashableImg}
              />
            </a>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
