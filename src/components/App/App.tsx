import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { Container } from "../Container/Container";
import { PopupConfirm } from "../PopupConfirm/PopupConfirm";

const App = () => {
  const [tasks, setTasks] = useLocalStorage({
    initialValue: [],
    key: "tasks",
  });

  return (
    <Container>
      <TodoTitle length={tasks.length} />
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </Container>
  );
};

export default App;
