import { useState } from "react";

function Todos() {
  const [text, setText] = useState([
    { id: 1, text: "Milk", completed: false },
    { id: 2, text: "butter", completed: false },
    { id: 3, text: "bread", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleAdd() {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setText([...text, newTodo]);
    setInputValue("");
  }

  function handleDelete(indexToDelete) {
    const updatedTodos = text.filter((item, index) => index != indexToDelete);

    setText(updatedTodos);
  }

  function handleToggle(index) {
    const updatedTodos = text.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setText(updatedTodos);
  }

  return (
    <div className="wrapper">
      <h1>Todo</h1>
      <div className="main-content">
        <h1>{text.filter(item => !item.completed).length}</h1>
        <div className="input-block">
          <input
            onChange={getInputValue}
            value={inputValue}
            type="text"
            name="todoInput"
            placeholder="Enter todo..."
          />
          <button onClick={handleAdd}>Add Todo</button>
        </div>

        <ul className="list-container">
          {text.map((item, index) => (
            <li key={index}>
              {/* <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(index)}
              /> */}
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(index)}
              >
                {item.text}
              </span>

              <button
                className="delBtn"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
