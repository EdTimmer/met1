import React from "react";

function Description({ description }) {
  // const closedClass = closed ? 'description-closed' : '';
  return (
    <div className="description">
      <div className="description-left">Description</div>
      <div className="description-right">{description}</div>
    </div>
  );
}

export default Description;
