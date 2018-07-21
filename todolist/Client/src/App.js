import React, { Component } from "react";
import TodoApp from "./Container/TodoApp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <TodoApp />
      </div>
    );
  }
}

export default App;
