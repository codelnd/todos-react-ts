import React from "react";
import { ITodo } from "../../utils/models";

interface ITodoListElementsProps {
  tasks: ITodo[];
  onRemove: (id: number) => any;
  onComplete: (id: number) => any;
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
            <label className="todo-list__task-wrp">
              <input
                type="checkbox"
                checked={el.isComplete}
                onChange={onComplete.bind(null, el.id)}
              />
              <span className="todo-list__title">{el.title}</span>
              <i
                className="material-icons black-text"
                onClick={onRemove.bind(null, el.id)}
              >
                clear
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
