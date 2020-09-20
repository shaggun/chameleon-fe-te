import React from "react";
import "./Divider.scss";

const Divider = (props) => {
  const { vertical } = props;
  return (
    <React.Fragment>
      <div className={vertical ? "divider--vertical" : "divider--horizontal"} />
    </React.Fragment>
  );
};

export default Divider;
