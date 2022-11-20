export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export interface IAddAction {
  type: TodoActionTypes.ADD_TODO;
  payload: string;
}

export interface ICompleteAction {
  type: TodoActionTypes.COMPLETE_TODO;
  payload: string;
}

export interface IRemoveAction {
  type: TodoActionTypes.REMOVE_TODO;
  payload: string;
}

export type TodoActionType = IAddAction | ICompleteAction | IRemoveAction;
