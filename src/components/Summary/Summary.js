import React from "react";
import InfoItem from "../InfoItem";
import Divider from "../Divider";
import { shortDate } from "../../utils/shortDate";
import "./Summary.scss";

const Summary = (props) => {
  const {
    totalInvitedUsers,
    totalPublishedCampaigns,
    totalTeamMembers,
    lastUserDate,
  } = props;
  return (
    <div className="summary">
      <div className="summary__title">Summary</div>
      <Divider />
      <div className="summary__items">
        <InfoItem
          label={"Team members:"}
          info={totalTeamMembers}
          size={"big"}
        />
        <Divider vertical={true} />
        <InfoItem
          label={"Users invited:"}
          info={totalInvitedUsers}
          size={"big"}
        />
        <Divider vertical={true} />
        <InfoItem
          label={"Published campaigns:"}
          info={totalPublishedCampaigns}
          size={"big"}
        />
        <Divider vertical={true} />
        <InfoItem
          label={"Last user added on:"}
          info={shortDate(lastUserDate)}
          size={"big"}
        />
      </div>
    </div>
  );
};

export default Summary;
