import React from "react";
import * as bootstrap from "bootstrap";
import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  
  return (
        <div
          class={`card card-frame text-center mb-5 inActive ${
            props.isActive ?"getActive" :"notActive"
          }`}
        >
          <div class="card-body text-center textInCard ">
            <span class="mb-3 mx-auto badge passiveColor badgeYesNo">
              {props.badge}
            </span>
            <h5 class="mb-1 text-secondary small formtip textInBadge">
              {props.headerBadge}{" "}
            </h5>
          </div>
      </div>

  );
}
