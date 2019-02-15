import React from "react";
import { ITodoProps } from "../App";

export default (props: ITodoProps): JSX.Element => {
  const { todo, index, actions } = props;
  const styleProps = { textDecoration: todo.isCompleted ? "line-through" : "" };
  return (
    <div className="todo" style={styleProps}>
      {todo.text}
      <div>
        <button onClick={() => actions.completeTodo(index)}>Complete</button>
        <button onClick={() => actions.deleteTodo(index)}>X</button>
      </div>
    </div>
  );
};
