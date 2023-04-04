import React, { useState } from "react";

function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      // Check if inputValue is empty or contains only whitespace
      return; // If it's empty, do nothing
    }
    setTodoItems([...todoItems, inputValue]);
    setInputValue("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Todo List</h1>
      <form className="flex mb-4">
        <input
          type="text"
          className="px-2 py-1 border rounded mr-2"
          placeholder="Add a todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </form>
      <ul className="list-disc ml-4">
        {todoItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
