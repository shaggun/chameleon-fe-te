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
      <header className="app-header"></header>
      <Summary />
      <UserList users={usersStore.users} />
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
