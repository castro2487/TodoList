import React from "react";
import Todo from "./TodoItem";

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  return <ul>{todoNode}</ul>;
};

export default TodoList;
