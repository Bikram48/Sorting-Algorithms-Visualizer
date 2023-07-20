import React from "react";

export default function Visualizer({ arr }) {
  const render = arr.map((num) => {
    const height = num * 10;
    return (
      <div
        style={{ height: `${height}px` }}
        className="bg-[#DA7E4A] w-10 flex justify-center items-end"
      >
        {num}
      </div>
    );
  });

  return (
    <div className="w-screen h-[500px] flex justify-center items-end gap-6">
      {render}
    </div>
  );
}
