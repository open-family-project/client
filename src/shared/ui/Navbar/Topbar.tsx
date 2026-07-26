import { Link } from "react-router-dom";
import React, { ReactNode } from "react";

const RightArea = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

type TopbarProps = {
  children: ReactNode;
};

export default function Topbar({ children }: TopbarProps) {
  let rightContent: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === RightArea) {
      rightContent = child.props.children;
    }
  });

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Open Family</Link>
      </div>
      <div className="flex-none gap-2">
        {rightContent}
      </div>
    </div>
  );
}

export { RightArea };