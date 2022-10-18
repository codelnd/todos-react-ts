import React, { useState } from "react";
import { Form } from "../Form/Form";
import { ITodoEl } from "../../utils/models";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const App = () => {
  const [tasks] = useState<ITodoEl[]>([]);
  const [storageTasks, setStorageTasks] = useLocalStorage({
    initialValue: tasks,
    key: "tasks",
  });

  return (
    <div className="container">
      <h1 className="todo__title">{`Количество дел: ${storageTasks.length}`}</h1>
      <Form tasks={storageTasks} onTasks={setStorageTasks} />
      <TodoList tasks={storageTasks} onTasks={setStorageTasks} />
    </div>
  );
};

export default App;
