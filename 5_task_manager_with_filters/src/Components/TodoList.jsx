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
    <div
      style={{
        width: "700px",
        backgroundColor: "#1a1a1a",
        padding: "2rem",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "400px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: "1",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",

          scrollbarGutter: "stable",

          scrollbarWidth: "thin",
          scrollbarColor: "#444 #1a1a1a",
        }}
      >
        {todos.length > 0 &&
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                backgroundColor: "#212121",
                borderRadius: "8px",
                paddingInline: "16px",
                paddingBlock: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
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
              padding: "2rem",
              textAlign: "center",
              color: "#aaa",
            }}
          >
            No {filter} tasks found!
          </li>
        )}

        {totalTasks === 0 && (
          <li
            style={{
              padding: "2rem",
              textAlign: "center",
              color: "#aaa",
            }}
          >
            No Task Added Yet!
          </li>
        )}
      </ul>

      <div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#212121",
            marginBottom: "1rem",
            borderRadius: "999px",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <strong>Total Tasks:</strong> {totalTasks}
          </p>
          <p>
            <strong>Completed Tasks:</strong> {completedTask}
          </p>
          <p>
            <strong>Remaining Tasks:</strong> {remainingTasks}
          </p>
        </div>
      </div>
    </div>
  );
}
