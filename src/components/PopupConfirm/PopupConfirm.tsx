import React from "react";
import {
  PopupStyle,
  PopupContainerStyle,
  PopupForm,
  PopupButton,
  PopupCloseButton,
} from "./PopupConfirm.style";

export const PopupConfirm = () => {
  return (
    <PopupStyle>
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
