import React from "react";
import { ITodo } from "../../utils/models";
import { TodoListElLabel, TodoListElTitle } from "./TodoListElements.style";

interface ITodoListElementsProps {
  tasks: ITodo[];
  onRemove: (id: number) => void;
  onComplete: (id: number) => void;
}

export const TodoListElements = ({
  tasks,
  onRemove,
  onComplete,
}: ITodoListElementsProps) => {
  return (
    <ul className="todo-list__tasks">
      {tasks.map((el) => {
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
                onChange={onComplete.bind(null, el.id)}
              />
              <TodoListElTitle
                primary={el.isComplete && true}
                color={"#b4b4b4"}
                decoration={"line-through"}
              >
                {el.title}
              </TodoListElTitle>
              <i
                className="material-icons black-text"
                onClick={onRemove.bind(null, el.id)}
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
