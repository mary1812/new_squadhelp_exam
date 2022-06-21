import React from "react";
import "./ButtonGroupComponent.css"
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function ButtonGroupComponent(badge, headerBadge) {
  const contents = [
    {
      badge: "Yes",
      headerBadge: "The Domain should exactly match the name",
    },
    {
      badge: "Yes",
      headerBadge: "But minor variations are allowed (Recommended)",
    },
    {
      badge: "No",
      headerBadge: "I am only looking for a name, not a Domain",
    },
  ];

  const badgeComponents = contents.map((content) => 
    <ButtonComponent badge={content.badge} headerBadge={content.headerBadge} />
  );

  return <div className="btnGroupComponent">{badgeComponents} </div>;
}
