import { useState } from "react";
import { FilterTodos } from "./FilterTodos";

export function AddTaskFrom({ onAddTask, filter, onChangeFilter }) {
  const [text, setText] = useState("");
  function handleAddTask() {
    if (!text.trim()) {
      alert("Add Task");
      return
    }
    onAddTask(text);
    setText("");
  }

  return (
    <>
      <div style={{ display: "flex", flex: 1, gap: "6px", width: "700px" }}>
        <input
          style={{ width: "100%" }}
          type="text"
          name="addTaskField"
          placeholder="Add Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        <FilterTodos filter={filter} onChangeFilter={onChangeFilter}/>
      </div>
    </>
  );
}
