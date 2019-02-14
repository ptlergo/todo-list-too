import React from "react";
import { ITodoProps } from "../App";

export default (props: ITodoProps): JSX.Element => {
    const {todo} = props;
  return <div className="todo">{todo.text}</div>;
};
