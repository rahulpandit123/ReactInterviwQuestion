import React, { useState } from "react";
import "./styles.css";
import data from "../data.js";
import Books from "../Books";
import Chocolates from "../Chocaltes";
export default function App() {
  const Book_data = data.name;
  const Chocalate_data = data.Chocolate;

  console.log(Chocalate_data);
  const [Show, setShow] = useState(false);
  const [s, sets] = useState(false);
  console.log(Book_data);
  const handleBooks = () => {
    setShow({ Show: !Show });
    sets(false);
  };
  const handleChoco = () => {
    sets(true);
    setShow(false);
  };
  return (
    <div className="App">
      <h1>Interview </h1>
      <div className="sidebar">
        <ul>
          <li onClick={handleBooks}>Books</li>
          <li onClick={handleChoco}>Chocolates</li>
        </ul>
        {Show ? <Books /> : null}
        {s ? <Chocolates /> : null}
      </div>
    </div>
  );
}
