import "./styles.css";
import React, { useRef } from "react";
import useScrollableFeed from "./useScrollableFeed";

export default function App() {
  const feedRef = useScrollableFeed();
  const messages = Array.from(
    { length: 100 },
    (_, index) => `Message ➡ ${index + 1}`,
  );
  return (
    <div className="App">
      <div ref={feedRef} className="feed-container">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}
