import React from "react";
import "./InfoItem.scss";

const InfoItem = (props) => {
  const { label, info, size } = props;
  return (
    <div className={`infoitem--${size}`}>
      <div className={`infoitem__label--${size}`}>{label}</div>
      <div className={`infoitem__info--${size}`}>{info}</div>
    </div>
  );
};

export default InfoItem;
