import React from "react";
import "./User.scss";
import { connect } from "react-redux";
import { selectUser } from "../../store/actions";

const User = (props) => {
  const { user, selectUser, selectedUser } = props;

  //Checking if this item is selected to change its color
  const itemSelected = user.id === selectedUser?.id;

  const selectNewUser = () => selectUser(user);
  return (
    <li
      className={`user ${itemSelected ? "user--selected" : "user--unselected"}`}
      onClick={selectNewUser}
    >
      <img src={user.cached_avatar} alt="avatar" className="user__avatar"></img>
      <div className="user__name">{user.name}</div>
    </li>
  );
};

const mapDispatchToProps = {
  selectUser,
};

export default connect(null, mapDispatchToProps)(User);
