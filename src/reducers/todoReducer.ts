const initialState: [] | Array<object> = [];

export const todoReducer = (state = initialState, action) => {
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
      return;
    case "REMOVE_TODO":
      return;
    default:
      return state;
  }
};
