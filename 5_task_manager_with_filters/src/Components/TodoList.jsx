export function TodoList({
  todos,
  onDelete,
  totalTasks,
  onCompletion,
  completedTask,
  remainingTasks,
  filter,
}) {
  return (
    <>
      <ul
        style={{
          width: "700px",
          display: "flex",
          padding: "2rem 2rem",
          borderRadius: "8px",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "#1a1a1a",
        }}
      >
        {todos.map((todo) => (
          <li
            style={{
              backgroundColor: "#212121",
              borderRadius: "8px",
              paddingInline: "16px",
              paddingBlock: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={todo.id}
          >
            <span
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => onCompletion(todo.id)}
            >
              {todo.task}
            </span>
            <button className="delBtn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}

        {todos.length === 0 && totalTasks > 0 && (
          <li
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "#888",
              listStyle:"none"
            }}
          >
            No {filter} tasks found!
          </li>
        )}

        <div>
          {totalTasks > 0 ? (
            <div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#212121",
                  marginBottom: "1rem",
                  marginTop: "0.5rem",
                  borderRadius: "999px",
                }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  <span style={{ fontWeight: 500 }}>Total Tasks:</span>{" "}
                  {totalTasks}
                </p>
                <p>
                  <span style={{ fontWeight: 500 }}>Completed Tasks:</span>{" "}
                  {completedTask}
                </p>
                <p>
                  <span style={{ fontWeight: 500 }}>Remaining Tasks:</span>{" "}
                  {remainingTasks}
                </p>
              </div>
            </div>
          ) : (
            <span>No Task Added Yet!</span>
          )}
        </div>
      </ul>
    </>
  );
}
