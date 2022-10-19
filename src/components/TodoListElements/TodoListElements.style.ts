import styled, { css } from "styled-components";

interface ITitleProps {
  primary?: boolean;
  color?: string;
  decoration?: string;
}

export const TodoListElLabel = styled.label`
  box-shadow: 3px 3px 8px 1px rgba(34, 60, 80, 0.2);
  padding: 8px;
  margin-top: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  border-radius: 10px;
`;

export const TodoListElTitle = styled.span`
  color: #505050;
  ${(props: ITitleProps) =>
    props.primary &&
    css`
      color: ${(props: ITitleProps) => props.color};
      text-decoration: ${(props: ITitleProps) => props.decoration};
    `}
`;
