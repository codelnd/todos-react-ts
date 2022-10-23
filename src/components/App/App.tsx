import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { Container } from "../Container/Container";
import { PopupConfirm } from "../PopupConfirm/PopupConfirm";
import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useLocalStorage({
    initialValue: [],
    key: "tasks",
  });

  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <Container>
      <TodoTitle length={tasks.length} />
      <Form tasks={tasks} onTasks={setTasks} />
      <TodoList tasks={tasks} onTasks={setTasks} />
      <PopupConfirm isOpened={popupOpened} />
    </Container>
  );
};

export default App;
