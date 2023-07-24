import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
  <div>
    <p>I'm the child, my favorite color is: {color}</p>
    <button onClick={onClick}>Click me</button>
  </div>  
  )
  
};

//how to properly build a react function component with typescript
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
  <div>
    <p>{ color }</p>
    <button onClick={onClick}>Click me</button>
  </div>
  
  )

};

