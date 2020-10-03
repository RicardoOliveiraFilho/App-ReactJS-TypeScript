// Contexto que irá expor informações de forma global na aplicação.
// Sempre que a aplicação se iniciar, esse context será criado e disponibilizado para a app.

import React, { createContext, useEffect, useState } from "react";
import { Task } from "../models/Task";
import { get, save } from "../services/TaskService";
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
  // useState: Hook para controlar os "estados" dos objetos da App,
  // sejam eles componentes, objetos de seu domínio ou outras propriedades dela.
  const [tasks, setTasks] = useState<Task[]>(get); // Esse 'get' é um método do 'TaskService'.

  // useEffect: Hook que ficará observando as alterações de estado da lista de tarefas 'tasks'.
  // Maneira eficaz de manter o estado correto da lista e ainda evitando repetição de código
  // do método 'save' do serviço em cada método do contexto...
  useEffect(() => {
    save(tasks);
  }, [tasks]); // Objetos a serem observados dentro do array.

  // Define as funções com as mesmas assinaturas presentes na Interface.
  const addTask = (title: string) => {
    const task: Task = { id: tasks.length + 1, title, done: false };
    // Atualiza o estado da lista
    setTasks([...tasks, task]); // adiciona a nova task no final da lista, após todas as outras tasks.
  };

  const removeTask = (task: Task) => {
    const index = tasks.indexOf(task);
    // O 'filter' retornará todas as tasks (representadas pelo caractere '_')
    // com exceção da task que estiver no índice obtido.
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggle = (task: Task) => {
    const index = tasks.indexOf(task);
    tasks[index].done = !task.done;
    setTasks([...tasks]);
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
