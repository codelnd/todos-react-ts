import styled from "styled-components";

export const PopupStyle = styled.section.attrs({
  className: "popup_opened",
})`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //visibility: hidden;
  //opacity: 0;
  transition: visibility 0.3s, opacity 0.3s linear;
`;

export const PopupContainerStyle = styled.div`
  position: relative;
  width: 200px;
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
  width: 50px;
  height: 25px;
`;
