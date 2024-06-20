import { React, useState } from "react";
import { MdAdd } from "react-icons/md";

import "./scss/TodoInput.scss";

const TodoInput = ({ onAddTodo }) => {
  //입력창 토글링 상태값
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInsertBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue.trim());
      setInputValue("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form className="insert-form" onSubmit={handleSubmit}>
          {isOpen ? (
            <input
              type="text"
              placeholder="할 일을 입력 후, 엔터를 누르세요!"
              value={inputValue}
              onChange={handleInputChange}
            />
          ) : (
            <div></div>
          )}
        </form>
      </div>
      <button
        className={`insert-btn ${isOpen ? "open" : ""}`}
        onClick={handleInsertBtnClick}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
