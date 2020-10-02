import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TaskContextType } from "../contexts/TaskContextType";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  // Hook para fazer com que o component utilize as propriedades e métodos de algum contexto.
  const { tasks } = useContext<TaskContextType>(TaskContext);

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
