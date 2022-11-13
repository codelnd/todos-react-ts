import styled, { css } from "styled-components";

interface ITitleProps {
  primary?: boolean;
  color?: string;
  decoration?: string;
}

export const TodoListElLabel = styled.label`
  background: #f6f6f6;
  padding: 8px;
  margin-top: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
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
