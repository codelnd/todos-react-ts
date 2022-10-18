import styled from "styled-components";

interface ITodoTitleProps {
  length: string;
}

export const TodoTitle = ({ length }: ITodoTitleProps) => {
  return <h1 className="todo__title">{`Количество дел: ${length}`}</h1>;
};
