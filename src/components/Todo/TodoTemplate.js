import { React, useState } from "react";
import "./scss/TodoTemplate.scss";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "할 일 1", done: false },
    { id: 2, text: "할 일 2", done: false },
    { id: 3, text: "할 일 3", done: false },
  ]);
  // console.log("tt:", todos);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const makeNewId = () => {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1;
  };
  //데이터 상향식 전달을 위한 함수를 생성
  // TodoInput에서 할 일을 끌어올리는 역할
  const onAddTodo = (text) => {
    const newTodo = {
      id: makeNewId(),
      text: text,
      done: false,
    };
    console.log("newTodo:", newTodo);
    setTodos([...todos, newTodo]);
  };

  const uncompletedTodos = todos.filter((todo) => !todo.done);

  const checktodo = (id) => {
    const copyTodoList = [...todos];
    const foundTodo = copyTodoList.find((todo) => todo.id === id);
    foundTodo.done = !foundTodo.done;
    console.log("founded: ", foundTodo);

    setTodos(copyTodoList);
    console.log(copyTodoList);
    
    // 아래는 맵으로 쓰는 단축 함수
    // setTodoList(todoList.map(todo => todo.id === id ? { ...todo, done: !todo.done }:todo));
  };

  return (
    <div className="TodoTemplate">
      <TodoHeader todoCount={uncompletedTodos.length} />
      <TodoMain todos={todos} onRemove={onRemove} onCheck={checktodo} />
      <TodoInput onAddTodo={onAddTodo} />
    </div>
  );
};

export default TodoTemplate;
