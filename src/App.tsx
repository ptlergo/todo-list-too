import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export interface ITodoProps {
  key: number;
  index: number;
  todo: any;
  actions: { completeTodo(index: number): any; deleteTodo(index: number): any };
}

export default () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "build really cool todo app", isCompleted: false }
  ]);

  const addTodo = (text: any): void => {
    // add the texts to the todos array
    const newTodos: any = [...todos, { text }];
    // set the new array to the todos state
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    // list of todos
    const newTodos: any = [...todos];
    // specific todo iscompleted based on index. change value
    newTodos[index].isCompleted = true;
    // save changes
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: any = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            actions={{ completeTodo, deleteTodo }}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};
