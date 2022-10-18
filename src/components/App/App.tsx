import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const App = () => {
  const [tasks, setTasks] = useLocalStorage({
    initialValue: [],
    key: "tasks",
  });

  return (
    <div className="container">
      <h1 className="todo__title">{`Количество дел: ${tasks.length}`}</h1>
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </div>
  );
};

export default App;
