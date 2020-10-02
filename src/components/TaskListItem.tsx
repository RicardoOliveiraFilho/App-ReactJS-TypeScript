import { Console } from "console";
import React from "react";
import { Task } from "../models/Task";

// Interface que possibilitará a tipagem do 'props' do Componente.
interface TaskListItemProps {
  task: Task;
}

const TaskListItem = (props: TaskListItemProps) => {
  const handleChange = (event: any) => {
    console.log("mudou");
  };

  const onRemove = (task: Task) => {
    console.log(task);
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
