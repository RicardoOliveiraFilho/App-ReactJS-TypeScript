import React from "react";
import Navbar from "./Navbar";
import TaskList from "./TaskList";

const App = () => {
  return (
    <div className="uk-container">
      <Navbar></Navbar>
      <TaskList></TaskList>
    </div>
  );
};

export default App;
