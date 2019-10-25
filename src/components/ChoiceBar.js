import React from "react";

export default function ChoiceBar({ title, count, percent }) {
  return (
    <div className="ChoiceBar">
      <div className="Progress" style={{ width: percent + "%" }}>
        <div className="ChoiceBarTitle">{title}</div>
      </div>
      <div className="ChoiceBarBadge">{count}</div>
    </div>
  );
}
