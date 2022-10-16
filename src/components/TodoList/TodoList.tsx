import React from "react";
import { ITodoEl } from "../../utils/models";

interface IFormProps {
  tasks: ITodoEl[];

  onRemove(id: number): void;

  onComplete(id: number): void;
}

export const TodoList = ({ tasks, onRemove, onComplete }: IFormProps) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="todo-list__empty">Список задач пуст</p>
      ) : (
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
                    onChange={() => onComplete(el.id)}
                  />
                  <span className="todo-list__title">{el.title}</span>
                  <i
                    className="material-icons black-text"
                    onClick={() => onRemove(el.id)}
                  >
                    clear
                  </i>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
