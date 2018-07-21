import React, { Component } from "react";
import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";

export default class TodoApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Make HTTP reques with Axios
    axios.get(this.apiUrl).then(res => {
      // Set state with result
      this.setState({ data: res.data });
    });
  }

  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val };
    // Update data
    axios.post(this.apiUrl, todo).then(res => {
      this.state.data.push(res.data);
      this.setState({ data: this.state.data });
    });
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter(todo => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl + "/" + id).then(res => {
      this.setState({ data: remainder });
    });
  }

  render() {
    // Render JSX
    return (
      <div>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}
