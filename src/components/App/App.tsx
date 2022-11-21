import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { Container } from "../Container/Container";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const state = useSelector((state) => state);

  return (
    <Container>
      <TodoTitle length={tasks.length} />
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </Container>
  );
};

export default App;
