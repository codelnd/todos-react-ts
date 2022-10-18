import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <div className="container">{children}</div>;
};
