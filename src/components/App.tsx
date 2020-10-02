import React from "react";
import TaskContext from "../contexts/TaskContext";
import Navbar from "./Navbar";
import TaskList from "./TaskList";

const App = () => {
  return (
    <TaskContext>
      <div className="uk-container">
        <Navbar></Navbar>
        <TaskList></TaskList>
      </div>
    </TaskContext>
  );
};

export default App;
