import { StyledTitle } from "../../styled-components/StyledTitle";

interface ITodoTitleProps {
  length: string;
}

export const TodoTitle = ({ length }: ITodoTitleProps) => {
  return <StyledTitle>{`Количество дел: ${length}`}</StyledTitle>;
};
