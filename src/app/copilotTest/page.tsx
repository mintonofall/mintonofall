"use client";
import React, { useState } from "react";

const Page = () => {
  const [selectedName, setSelectedName] = useState<string>("");
  const [emptyArray, setEmptyArray] = useState<Array<string>>(
    Array.from({ length: 48 })
  );
  const names: string[] = ["John", "Jane", "Alice", "Bob", "Eve", ""]; // Replace with your own list of names

  const handleEmptyArrayClick = (index: number) => {
    const newArray = [...emptyArray];
    newArray[index] = selectedName;
    setEmptyArray(newArray);
  };
  const handleNameClick = (name: string) => {
    setSelectedName(name);
  };

  return (
    <div className="flex">
      <div className="flex-1 border">
        {/* Left side */}
        <div className="grid grid-cols-4 grid-rows-12 gap-5">
          {/* Render the left side grid */}
          {Array.from({ length: 48 }).map((_, index) => (
            <div
              key={index}
              className="border p-5 bg-blue-500"
              onClick={() => handleEmptyArrayClick(index)}
            >
              {/* Display the selected name */}
              {emptyArray[index] || ""}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 border">
        {/* Right side */}
        <div className="grid grid-rows-20 gap-5">
          {/* Render the right side grid */}
          {names.map((name, index) => (
            <div
              key={index}
              className="border p-5 cursor-pointer"
              onClick={() => handleNameClick(name)}
            >
              {/* Display the name */}
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
