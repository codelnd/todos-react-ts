import { TodoActionTypes } from "../models/models";

export const addTodo = (payload: string) => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload,
  };
};
