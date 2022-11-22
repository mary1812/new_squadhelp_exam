import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  
  return (
    <div className="wrapperBtnGroup">
        <div
          className={`card card-frame text-center mb-5 inActive ${
            props.isActive ?"getActive" :"notActive"
          }`}
        >
          <div className="card-body text-center textInCard ">
            <span className="mb-3 mx-auto badge passiveColor badgeYesNo">
              {props.badge}
            </span>
            <h5 className="mb-1 text-secondary small formtip textInBadge">
              {props.headerBadge}{" "}
            </h5>
          </div>
      </div>
      </div>
  );
}

export default ButtonComponent;
