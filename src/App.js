import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState();
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    if (amount > data.length) {
      setText(data);
    }
    if (amount < 0) {
      setText(data.slice(0, 1));
    }
  };

  return (
    <section className="section-center">
      <h1>Tired of boring lorem ipsum?</h1>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
      </article>
    </section>
  );
}

export default App;
