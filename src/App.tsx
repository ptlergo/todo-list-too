import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default () => {

  const [todos, setTodos] = useState([
    {text: "Learn about React"},
    {text: "Meet friend for lunch"},
    {text: "build really cool todo app"},
  ])
  return (
    <div>
      hello
    </div>
  )
}

