import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

export const Main = ({ children }: ChildrenProps) => {
  return <main>{children}</main>;
};
