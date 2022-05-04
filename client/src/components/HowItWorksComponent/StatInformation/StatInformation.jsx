import React from "react";
import styles from "./StatInformation.module.sass";
import { Button } from "react-bootstrap";
import CONSTANTS from "../../../constants";
import { Row, Col } from "react-bootstrap";
const StatInformation = () => {
  return (
    <div>
      <div className={styles.gradientPrimary}>
        <div className={styles.textInfo}>
          <h3 className="h2 text-info font-weight-semi-bold mb-2">
            Ready to get started?
          </h3>
          <p className="lead text-white mb-3 fw-normal">
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </p>
          <Button variant="outline-*">Start A Contest</Button>
        </div>
      </div>
      <div>
        <Row className="justify-content-md-center text-center">
          <Col>
            <img
              className="mx-auto"
              style={{ height: "100px", width: "100px" }}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}starInfo.png`}
            ></img>
            <p className="mb-0">
              <span className="text-dark fw-bold">4.9 out of 5 stars</span> from
              25,000+ customers.
            </p>
          </Col>
          <Col>
            <img
              className="mx-auto"
              style={{ height: "100px", width: "100px" }}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}peopleInfo.png`}
            ></img>
            <p className="mb-0">
              Our branding community stands{" "}
              <span className="text-dark fw-bold">200,000+</span> strong.
            </p>
          </Col>
          <Col>
            <img
              className="mx-auto"
              style={{ height: "100px", width: "100px" }}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}documentInfo.png`}
            ></img>
            <p className="mb-0">
              <span className="text-dark fw-bold">140+ Industries</span>{" "}
              supported across more than{" "}
              <span className="text-dark fw-bold">85 countries </span> - and
              counting.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StatInformation;
