// Contexto que irá expor informações de forma global na aplicação.
// Sempre que a aplicação se iniciar, esse context será criado e disponibilizado para a app.

import React, { createContext } from "react";
import { Task } from "../models/Task";
import { TaskContextType } from "./TaskContextType";

// 'createContext': Hook para a criação do Contexto.
export const TaskContext = createContext<TaskContextType>({
  // Para não ocorrer algum problema (nulo, referência), se inicializa todas as propriedades e
  // funções (sob contrato - vide a interface 'TaskContextType') com valores padrões.
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggle: () => {},
});

// Provedor do Contexto... Ao iniciar a app, ela terá este contexto, caso solicite.
// Uma única instância por app (Pattern Singleton).
const TaskProvider = (props: any) => {
  // Inicializa as propriedades do contexto se necessário.
  const tasks: Task[] = [
    { id: 1, title: "Ir ao Supermercado", done: true },
    { id: 2, title: "Ir a Academia", done: false },
  ];

  // Define as funções com as mesmas assinaturas presentes na Interface.
  const addTask = (title: string) => {
    console.log(`Adicionou ${title}`);
  };

  const removeTask = (task: Task) => {
    console.log(`Removeu ${task.title}`);
  };

  const toggle = (task: Task) => {
    console.log(`Alterou ${task.title}`);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggle,
      }}
    >
      {/* Tudo que for passado para o 'props' do contexto, estará em seu escopo. */}
      {/* Tudo que estiver inserido no objeto posto em 'value' será exposto para
        os 'children' do contexto. */}
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
