export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface ITodoAction {
  type: string;
  payload?: any;
}
