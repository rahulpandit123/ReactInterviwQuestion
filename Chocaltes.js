import React, { useState } from "react";
import data from "./data";
const Chocaltes = () => {
  const [Show, setShow] = useState(false);
  const choco_data = data.Chocolate;
  const handleShow = () => {
    setShow({ Show: true });
  };
  return choco_data.map((item) => {
    return <h2>{item.flavour} </h2>;
  });
};
export default Chocaltes;
