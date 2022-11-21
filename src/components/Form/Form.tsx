import React, { useRef } from "react";
import { FormStyle } from "./Form.style";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action-creators/actionCreators";

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputRef.current!.value !== "") {
      dispatch(addTodo(inputRef.current!.value));
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
