import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer";
import bubbleSort from "./algorithms/bubbleSort";

export default function App() {
  const [arr, setArr] = useState([
    31, 11, 14, 18, 14, 36, 22, 28, 14, 12, 34, 4,
  ]);

  const changeArr = (array) => {
    const newArr = [...array];
    setArr(newArr);
  };

  const handleChange = async () => {
    await bubbleSort(arr, changeArr);
  };

  return (
    <>
      <Navbar onclick={handleChange} />
      <Visualizer arr={arr} />
    </>
  );
}
