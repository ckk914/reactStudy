import React, { useState } from "react";
import "./scss/TodoMain.scss";
import TodoItem from "./TodoItem";

const TodoMain = ({ todos, onRemove }) => {
  return (
    <div className="todo-main">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />;
        })}
      </ul>
    </div>
  );
};

export default TodoMain;
