import React from "react";
import { Task } from "../models/Task";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const tasks: Task[] = [
    { id: 1, title: "Ir ao Supermercado", done: true },
    { id: 2, title: "Ir a Academia", done: false },
  ];

  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task) => (
          <TaskListItem key={task.id} task={task}></TaskListItem>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
