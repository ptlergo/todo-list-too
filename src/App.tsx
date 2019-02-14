import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export interface ITodoProps {
  key: number;
  index: number;
  todo: any;
}

export default () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "build really cool todo app" }
  ]);


  const addTodo = (text: any): void => {
    // add the texts to the todos array
    const newTodos = [...todos, {text}]
    // set the new array to the todos state
    setTodos(newTodos)
  }
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
      <TodoForm
      addTodo={addTodo} />
    </div>
  );
};
