import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="wrapper">{children}</div>
    </div>
  );
};
