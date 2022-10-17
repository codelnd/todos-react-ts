import React, { useState, useEffect } from "react";
import { Form } from "../Form/Form";
import { ITodoEl } from "../../utils/models";
import { TodoList } from "../TodoList/TodoList";

const App = () => {
  const [tasks, setTasks] = useState<ITodoEl[]>([]);

  useEffect(() => {
    const tasksFromStorage = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    ) as ITodoEl[];
    setTasks(tasksFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="todo__title">{`Количество дел: ${tasks.length}`}</h1>
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </div>
  );
};

export default App;
