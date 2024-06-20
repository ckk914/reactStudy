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
  //삭제 처리
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
  
  //남은 할일 개수 세기
  const uncompletedTodos = todos.filter((todo) => !todo.done);

  //done 처리 
  const checktodo = (id) => {
    //리스트 복사~!
    const copyTodoList = [...todos];
    //리스트에서 id 와 같은 걸 찾는다!
    const foundTodo = copyTodoList.find((todo) => todo.id === id);
    foundTodo.done = !foundTodo.done;
    console.log("founded: ", foundTodo);

    setTodos(copyTodoList);
    console.log(copyTodoList);
    //        ㅣㅣ
    // 아래는 맵으로 코드 단축 가능
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
