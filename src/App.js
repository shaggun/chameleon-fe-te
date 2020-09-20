import React, { useEffect } from "react";
import "./App.scss";
import Summary from "./components/Summary";
import UserList from "./components/UserList";
import { connect } from "react-redux";
import { fetchUsers } from "./store/actions";

function App(props) {
  const { fetchUsers, usersStore } = props;

  //Since this is a functional component the hook below works as componentDidMount()
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="app">
      <div className="app__header"></div>
      <br />
      <Summary
        totalInvitedUsers={usersStore.totalInvitedUsers}
        totalPublishedCampaigns={usersStore.totalPublishedCampaigns}
        totalTeamMembers={usersStore.totalTeamMembers}
        lastUserDate={usersStore.lastUserDate}
      />
      <br />
      <UserList
        users={usersStore.users}
        selectedUser={usersStore.selectedUser}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usersStore: state.usersStore,
  };
};

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
