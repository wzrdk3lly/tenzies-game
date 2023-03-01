import React from "react";

export default function App(props) {
  // iterates through the dice array passed in via a prop and creates an button elemenet out of each one
  let diceElements = props.diceProp.map((die, index) => {
    return (
      <button
        key={index}
        className={
          !die.frozen
            ? "bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl"
            : "bg-green-200 rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl"
        }
        onClick={(e) => props.toggleFreeze(e)}
        value={index}
      >
        {die.number}
      </button>
    );
  });

  return (
    <div className="flex justify-center">
      <div className=" grid grid-rows-2 grid-cols-5 gap-10">{diceElements}</div>
    </div>
  );
}
