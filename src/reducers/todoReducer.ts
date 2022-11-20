const initialState: [] | Array<object> = [];

interface ITodoAction {
  type: string;
  payload?: any;
}

export const todoReducer = (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          isComplete: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((el: any) => {
        if (el.id === action.payload) {
          el.isComplete = !el.isComplete;
        }
        return el;
      });
    case "REMOVE_TODO":
      return state.filter((el: any) => {
        return el.id !== action.payload;
      });
    default:
      return state;
  }
};
