import React from "react";

export default function Navbar({ onclick }) {
  return (
    <div className="bg-[#4E5153] h-16 w-full text-3xl mt-6 flex justify-center gap-6 items-center">
      <div>
        <select name="" id="">
          <option value="bubble">Bubble Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
        </select>
      </div>
      <div>
        <button onClick={() => onclick()}>Visualize</button>
      </div>
    </div>
  );
}
