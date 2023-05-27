import React, { Component } from "react";

import "./App.css";
import TodoList from "./TodoList/components/todoList";
import ShoppingCart from "./ShoppingCart/components/shoppingCart"

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ShoppingCart />
        <TodoList />
      </>
    );
  }
}

export default App;
