import { EmptyList } from "../EmptyList/EmptyList";
import { TodoListElements } from "../TodoListElements/TodoListElements";
import useTypedSelector from "../../hooks/useTypedSelector";

export const TodoList = () => {
  const state = useTypedSelector((state) => state.todo);

  return (
    <div className="todo-list">
      {state.length === 0 ? <EmptyList /> : <TodoListElements />}
    </div>
  );
};
