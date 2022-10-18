import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TodoTitle } from "../TodoTitle/TodoTitle";

const App = () => {
  const [tasks, setTasks] = useLocalStorage({
    initialValue: [],
    key: "tasks",
  });

  return (
    <div className="container">
      <TodoTitle length={tasks.length} />
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </div>
  );
};

export default App;
