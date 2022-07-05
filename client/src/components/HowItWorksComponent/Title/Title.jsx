import React from "react";
import { Button } from "react-bootstrap";
import CONSTANTS from "../../../constants";
import styles from "./Title.module.sass";
import "./Title.module.sass";

const Title = () => {
  return (
    <>
      <div className={`container-space-1  ${styles.titleContainer}`}>
        <div className={ `container ${styles.containertitle}`}>
        <div className="row justify-content-lg-between align-items-center">
            <div className="col col-lg-7">
            <small className="btn btn-xs btn-soft-primary btn-pill mb-2 pe-none " >
              World's #1 Naming Platform
            </small>
            <div className="mb-4">
                <h1 className={ `h1 ${styles.htitle}`}>How Does Squadhelp Work?</h1>
              <p>
                Squadhelp helps you come up with a great name for your business
                by combining the power of crowdsourcing with sophisticated
                technology and Agency-level validation services.
              </p>
              <div className="mb-9">
              <Button className = "btn btn-video transition-3d-hover mb-2 mb-sm-0 mr-sm-2">
                 {" "}Play Video{" "} 
              </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-5 mb-4">
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}titlePhone.png`}
                alt="Smartphone"
                className={styles.imgtitle}
            />
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Title;

