import React from "react";
import {
  PopupStyle,
  PopupContainerStyle,
  PopupForm,
  PopupButton,
  PopupCloseButton,
} from "./PopupConfirm.style";

interface IPopupProps {
  isOpened: boolean;
}

export const PopupConfirm = ({ isOpened }: IPopupProps) => {
  return (
    <PopupStyle opened={isOpened}>
      <PopupContainerStyle>
        <PopupForm>
          <PopupButton type="submit">Да</PopupButton>
          <PopupButton type="button">Нет</PopupButton>
        </PopupForm>
        <PopupCloseButton>clear</PopupCloseButton>
      </PopupContainerStyle>
    </PopupStyle>
  );
};
