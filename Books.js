import React from "react";
import data from "../data.js";

const Books = () => {
  const Book_data = data.name;
  return Book_data.map((item) => {
    return (
      <div>
        <h2>{item.Category} </h2>
      </div>
    );
  });
};

export default Books;
