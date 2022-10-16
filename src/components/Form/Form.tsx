import React, { useRef } from "react";
import { ITodoEl } from "../../utils/models";

interface IFormProps {
  tasks: ITodoEl[];

  onTasks([]): void;
}

export const Form = ({ tasks, onTasks }: IFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: ITodoEl = {
      id: Date.now(),
      title: inputRef.current!.value,
      isComplete: false,
    };
    if (inputRef.current!.value !== "") {
      onTasks([task, ...tasks]);
    }
    inputRef.current!.value = "";
  };

  return (
    <form
      id="todoForm"
      name="todoForm"
      className="input-field"
      onSubmit={submitHandler}
    >
      <input
        ref={inputRef}
        type="text"
        id="todo"
        name="todo"
        placeholder="Введите необходимую задачу"
        autoComplete="off"
      />
      <label htmlFor="todo" className="active">
        Добавить задачу
      </label>
    </form>
  );
};
