import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Button;
