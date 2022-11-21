import { TodoActionTypes } from "../models/models";

export const addTodo = (payload: string) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload,
  };
};

export const completeTodo = (payload: string) => {
  return {
    type: TodoActionTypes.COMPLETE_TODO,
    payload,
  };
};

export const removeTodo = (payload: string) => {
  return {
    type: TodoActionTypes.REMOVE_TODO,
    payload,
  };
};
