import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { TaskContextType } from "../contexts/TaskContextType";
import { TaskContext } from "../contexts/TaskContext";

const schema = yup.object().shape({
  title: yup.string().required("É necessário informar o Título da Tarefa!"),
});

// Interface que servirá para 'Tipar' os campos do formulário...
interface AddTaskForm {
  title: string;
}

const AddTask = () => {
  const { addTask } = useContext<TaskContextType>(TaskContext);

  //useForm: Hook responsável por gerenciar o formulário, provendo alguns métodos
  // para o funcionamento do mesmo...
  const { register, handleSubmit, errors } = useForm({
    // A validação ficará a cargo do yup (passado para o 'resolver' do Form),
    // baseado no schema criado anteriormente.
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTaskForm, event: any) => {
    addTask(data.title);
    event.target.reset(); // Limpará o form...
    window.location.href = "/"; // Redireciona para a rota da listagem das tarefas.
  };

  return (
    <form onSubmit={handleSubmit<AddTaskForm>(onSubmit)}>
      <h4>Nova Tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Nova tarefa..."
          className="uk-input"
          ref={register}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTask;
