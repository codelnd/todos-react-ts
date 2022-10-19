import { TodoTitleStyle } from "./TodoTitle.style";

interface ITodoTitleProps {
  length: string;
}

export const TodoTitle = ({ length }: ITodoTitleProps) => {
  return <TodoTitleStyle>{`Количество дел: ${length}`}</TodoTitleStyle>;
};
