import { TodoListElLabel, TodoListElTitle } from "./TodoListElements.style";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../../action-creators/actionCreators";

export const TodoListElements = () => {
  const state = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list__tasks">
      {state.map((el) => {
        const taskClass = ["todo-list__task"];
        if (el.isComplete) {
          taskClass.push("todo-list__task_complete");
        }

        return (
          <li className={taskClass.join(" ")} key={el.id}>
            <TodoListElLabel>
              <input
                type="checkbox"
                checked={el.isComplete}
                onChange={() => dispatch(completeTodo(el.id))}
              />
              <TodoListElTitle
                primary={el.isComplete}
                color={"#b4b4b4"}
                decoration={"line-through"}
              >
                {el.title}
              </TodoListElTitle>
              <i
                className="material-icons black-text"
                onClick={() => dispatch(removeTodo(el.id))}
              >
                clear
              </i>
            </TodoListElLabel>
          </li>
        );
      })}
    </ul>
  );
};
