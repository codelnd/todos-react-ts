import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { Container } from "../Container/Container";

const App = () => {
  return (
    <Container>
      <TodoTitle />
      <Form />
      <TodoList />
    </Container>
  );
};

export default App;
