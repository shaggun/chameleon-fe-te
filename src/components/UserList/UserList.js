import React from "react";

const UserList = (props) => {
  const { users } = props;

  return (
    <div>
      <ul>
        {users.map((user, id) => {
          return (
            <li user={user} key={id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
