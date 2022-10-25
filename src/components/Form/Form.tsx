import React, { useRef } from "react";
import { ITodo } from "../../utils/models";
import { FormStyle } from "./Form.style";

interface IFormProps {
  tasks: ITodo[];

  onTasks(p: (prevState: ITodo[]) => ITodo[]): void;
}

export const Form = ({ tasks, onTasks }: IFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const task: ITodo = {
      id: Date.now(),
      title: inputRef.current!.value,
      isComplete: false,
    };
    if (inputRef.current!.value !== "") {
      onTasks(() => [task, ...tasks]);
    }
    inputRef.current!.value = "";
  };

  return (
    <FormStyle id="todoForm" name="todoForm" onSubmit={submitHandler}>
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
    </FormStyle>
  );
};
