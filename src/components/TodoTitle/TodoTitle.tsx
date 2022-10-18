import { StyledTitle } from "../../styled-components/StyledTitle/StyledTitle";

interface ITodoTitleProps {
  length: string;
}

export const TodoTitle = ({ length }: ITodoTitleProps) => {
  return <StyledTitle>{`Количество дел: ${length}`}</StyledTitle>;
};
