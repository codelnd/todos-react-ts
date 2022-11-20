import { TodoActionType, TodoActionTypes } from "../models/models";

const initialState: [] | Array<Object> = [];

export const todoReducer = (state = initialState, action: TodoActionType) => {
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
