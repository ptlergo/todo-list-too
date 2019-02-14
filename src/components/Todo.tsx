import React from "react";

export default (props: any): JSX.Element => {
    const {todo} = props;
  return <div className="todo">{todo.text}</div>;
};
