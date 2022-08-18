import React, { useState } from "react";
import * as bootstrap from "bootstrap";
import "./ButtonGroupComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ButtonGroupComponent(badge, headerBadge) {
  const [selectedId, setSelectedId] = useState('');

  const contents = [
    {
      id:1,
      badge: "Yes",
      headerBadge: "The Domain should exactly match the name",

    },
    {
      id:2,
      badge: "Yes",
      headerBadge: "But minor variations are allowed (Recommended)",
    },
    {
      id:3,
      badge: "No",
      headerBadge: "I am only looking for a name, not a Domain",
    },
  ];

  const buttonsGroup = contents.map((content) => (
    <div onClick={() => {
      setSelectedId(content.id)
    }} className="buttonsGroup">
    <ButtonComponent
      badge={content.badge}
      headerBadge={content.headerBadge}
      isActive={selectedId === content.id}
    /></div>
  ));

  return <div class="btnGrp">{buttonsGroup}</div>;
}
