import React, { useState } from "react";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ButtonComponent.css";

export default function ButtonComponent(props) {
  const [color, setColor] = useState(true);
  return (
    <div
      class={`card card-frame text-center mb-5 inActive ${
        color ? "notActive" : "getActive"
      }`}
      onClick={() => setColor(!color)}
    >
      <div class="p-3 card-body text-center borderRad">
        <span class="mb-3 mx-auto badge passiveColor badgeYesNo">
          {props.badge}
        </span>
        <h5 class="mb-1 text-secondary small formtip textInBadge">{props.headerBadge} </h5>
      </div>
    </div>
  );
}

