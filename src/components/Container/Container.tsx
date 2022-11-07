import React from "react";
import { ContainerStyle } from "./Container.style";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <ContainerStyle className="container">{children}</ContainerStyle>;
};
