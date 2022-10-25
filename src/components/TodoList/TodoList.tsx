import React from "react";
import { ITodo } from "../../utils/models";
import { EmptyList } from "../EmptyList/EmptyList";
import { TodoListElements } from "../TodoListElements/TodoListElements";

interface IFormProps {
  tasks: ITodo[];

  onTasks(p: (prevState: ITodo[]) => ITodo[]): void;
}

export const TodoList = ({ tasks, onTasks }: IFormProps) => {
  const removeHandler = (id: number): void => {
    onTasks((prevState: ITodo[]) => prevState.filter((el) => el.id !== id));
  };

  const completeHandler = (id: number): void => {
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
        <EmptyList />
      ) : (
        <TodoListElements
          tasks={tasks}
          onRemove={removeHandler}
          onComplete={completeHandler}
        />
      )}
    </div>
  );
};
