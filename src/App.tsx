import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

export default () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "build really cool todo app" }
  ]);

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};
