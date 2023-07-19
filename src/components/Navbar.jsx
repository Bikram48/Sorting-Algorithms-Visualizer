import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#4E5153] h-16 w-full text-3xl mt-6 flex justify-center gap-6 items-center">
      <div>
        <select name="" id="">
          <option value="">Selection Sort</option>
          <option value="">Insertion Sort</option>
          <option value="">Bubble Sort</option>
        </select>
      </div>
      <div>
        <button>Visualize</button>
      </div>
    </div>
  );
}
