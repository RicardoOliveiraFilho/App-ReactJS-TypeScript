import { Task } from "../models/Task";

// Chave para a utilização do LocalStorage do browser.
const TASK_STORE = "tasks";

// Método para obter os dados (json das tarefas) do LocalStorage para a App.
export const get = (): Task[] => {
  const data = localStorage.getItem(TASK_STORE) || "";
  try {
    const result = JSON.parse(data) as Task[];
    return result;
  } catch {
    return [];
  }
};

// Método para salvar o estado atual dos dados da app (lista de tasks) no LocalStorage.
export const save = (data: Task[]) => {
  if (data?.length >= 1) {
    localStorage.setItem(TASK_STORE, JSON.stringify(data));
  }
};
