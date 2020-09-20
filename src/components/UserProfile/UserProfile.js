import React from "react";
import "./UserProfile.scss";
import InfoItem from "../InfoItem";
import { shortDate } from "../../utils/shortDate";

const UserProfile = (props) => {
  const { selectedUser } = props;

  return (
    <div className="userprofile">
      <img
        src={selectedUser.cached_avatar}
        alt="profilePic"
        className="userprofile__avatar"
      ></img>

      <div>
        <InfoItem label={"Name:"} info={selectedUser.name} size={"small"} />
        <InfoItem label={"Email:"} info={selectedUser.email} size={"small"} />
        <InfoItem
          label={"User created on:"}
          info={shortDate(selectedUser.created_at)}
          size={"small"}
        />
      </div>
    </div>
  );
};

export default UserProfile;
