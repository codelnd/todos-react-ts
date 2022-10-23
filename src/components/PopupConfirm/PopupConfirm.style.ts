import styled, { css } from "styled-components";

interface IPopupStyleProps {
  opened: boolean;
}

export const PopupStyle = styled.section`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s linear;
  ${(props: IPopupStyleProps) =>
    props.opened &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const PopupContainerStyle = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 34px 36px 37px 36px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const PopupButton = styled.button`
  background: transparent;
  border: 1px solid grey;
  width: 75px;
  height: 40px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const PopupCloseButton = styled.i.attrs({
  className: "material-icons black-text",
})`
  position: absolute;
  top: -18px;
  right: -18px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
