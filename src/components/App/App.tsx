import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { Container } from "../Container/Container";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  return (
    <Container>
      <TodoTitle />
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
    </Container>
  );
};

export default App;
