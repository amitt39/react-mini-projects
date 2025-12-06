import { useState } from "react";
import { AddTaskFrom } from "./AddTaskFrom";
import { Header } from "./Header";
import { TodoList } from "./TodoList";

export function Todos() {
  const [todos, setTodos] = useState([]);
  const totalTasks = todos.length;
  const completedTask = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTask;

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  function handleAddTask(text) {
    setTodos((prev) => {
      return [...prev, { id: Date.now(), task: text, completed: false }];
    });
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleTaskCompletion(id) {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "#212121",
          padding: "2rem 4rem",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Header title={"Personal Task Manager With Filters"} />
        <AddTaskFrom
          onAddTask={handleAddTask}
          filter={filter}
          onChangeFilter={setFilter}
        />
        <TodoList
          todos={filteredTodos}
          onDelete={handleDelete}
          totalTasks={totalTasks}
          completedTask={completedTask}
          remainingTasks={remainingTasks}
          onCompletion={handleTaskCompletion}
        />
      </div>
    </>
  );
}
