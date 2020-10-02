// Interface (contrato) do contexto que irá expor informações de forma global na aplicação.

import { Task } from "../models/Task";

export interface TaskContextType {
  tasks: Task[];
  addTask(title: string): void;
  removeTask(task: Task): void;
  toggle(task: Task): void;
}
