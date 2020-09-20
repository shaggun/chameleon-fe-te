import React from "react";
import User from "../User";
import "./UserList.scss";
import Divider from "../Divider";

const UserList = (props) => {
  const { users, selectedUser } = props;

  return (
    <div className="userList">
      <div className="userList__title">Users</div>
      <Divider />
      <div className="userList__content">
        <ul className="userList__ul">
          {users.map((user, id) => {
            return <User user={user} key={id} selectedUser={selectedUser} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
