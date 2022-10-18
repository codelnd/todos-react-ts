import React from "react";
import { ITodo } from "../../utils/models";

interface IFormProps {
  tasks: ITodo[];

  onTasks(p: (prevState: ITodo[]) => ITodo[]): void;
}

export const TodoList = ({ tasks, onTasks }: IFormProps) => {
  const removeHandler = (id: number) => {
    onTasks((prevState) => prevState.filter((el) => el.id !== id));
  };

  const completeHandler = (id: number) => {
    onTasks((prevState) =>
      prevState.map((el) => {
        if (el.id === id) {
          el.isComplete = !el.isComplete;
        }
        return el;
      })
    );
  };

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
                    onChange={completeHandler.bind(null, el.id)}
                  />
                  <span className="todo-list__title">{el.title}</span>
                  <i
                    className="material-icons black-text"
                    onClick={removeHandler.bind(null, el.id)}
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
