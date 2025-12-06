import { useState } from "react";
import "./App.css";
import { Todos } from "./Components/todos";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          minHeight: '100vh',
          paddingTop:'2rem'
        }}
      >
        <Todos />
      </div>
    </>
  );
}

export default App;
