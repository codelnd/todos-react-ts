import { ITodoAction } from "../models/models";

const initialState: [] | Array<object> = [];

enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export const todoReducer = (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          isComplete: false,
        },
      ];
    case TodoActionTypes.COMPLETE_TODO:
      return state.map((el: any) => {
        if (el.id === action.payload) {
          el.isComplete = !el.isComplete;
        }
        return el;
      });
    case TodoActionTypes.REMOVE_TODO:
      return state.filter((el: any) => {
        return el.id !== action.payload;
      });
    default:
      return state;
  }
};
