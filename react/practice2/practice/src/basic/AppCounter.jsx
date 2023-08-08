import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  const handleClick = () => setTotal((prev) => prev + 1);

  return (
    <div className="container">
      <div className="banner">
        Total: {total} {total > 10 ? "🔥" : "❄️"}
      </div>
      <Counter total={total} onClick={handleClick} />
      <Counter total={total} onClick={handleClick} />
    </div>
  );
}
