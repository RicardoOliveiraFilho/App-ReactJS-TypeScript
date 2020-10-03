import React from "react";
import TaskContext from "../contexts/TaskContext";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./AddTask";

const App = () => {
  return (
    <TaskContext>
      <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Switch>
            {/*
              Nota: Sempre ir da rota mais específica para a mais genérica,
              pois no primeiro match que ocorrer o Switch+Route irá pensar
              que se trata da rota correta...
            */}
            <Route path="/create">
              <AddTask></AddTask>
            </Route>
            <Route path="/">
              <h4>Minha Lista de Tarefas</h4>
              <TaskList></TaskList>
            </Route>
          </Switch>
        </div>
      </Router>
    </TaskContext>
  );
};

export default App;
