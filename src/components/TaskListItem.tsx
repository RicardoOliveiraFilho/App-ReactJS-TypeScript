import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TaskContextType } from "../contexts/TaskContextType";
import { Task } from "../models/Task";

// Interface que possibilitará a tipagem do 'props' do Componente.
interface TaskListItemProps {
  task: Task;
}

const TaskListItem = (props: TaskListItemProps) => {
  // Hook para fazer com que o component utilize as propriedades e métodos de algum contexto.
  const { removeTask, toggle } = useContext<TaskContextType>(TaskContext);

  const handleChange = (event: any) => {
    toggle(props.task);
  };

  const onRemove = (task: Task) => {
    removeTask(task);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={props.task.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.task.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.task)}
        ></button>
      </td>
    </tr>
  );
};

export default TaskListItem;
