import { TodoTitleStyle } from "./TodoTitle.style";
import useTypedSelector from "../../hooks/useTypedSelector";

export const TodoTitle = () => {
  const state = useTypedSelector((state) => state.todo);

  return <TodoTitleStyle>{`Количество дел: 0`}</TodoTitleStyle>;
};
