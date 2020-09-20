import React from "react";
import "./App.scss";
import Summary from "./components/Summary";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <Summary />
      <UserList />
    </div>
  );
}

export default App;
