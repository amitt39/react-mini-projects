export function FilterTodos({ filter, onChangeFilter }) {
  return (
    <>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          style={{ fontWeight: filter === "all" ? "500" : "normal" }}
          onClick={() => onChangeFilter("all")}
          className="filterBtns"
        >
          All
        </button>
        <button
          style={{ fontWeight: filter === "active" ? "500" : "normal" }}
          onClick={() => onChangeFilter("active")}
          className="filterBtns"
        >
          Active
        </button>
        <button
          style={{ fontWeight: filter === "completed" ? "500" : "normal" }}
          onClick={() => onChangeFilter("completed")}
          className="filterBtns"
        >
          Completed
        </button>
      </div>
    </>
  );
}
