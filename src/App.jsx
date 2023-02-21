import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  // Make the main background black
  // within that background add a large square div with rounded edges and a white back
  return (
    <main className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="bg-white w-11/12 h-[33rem] rounded-md ">
        {/* Tenziez board header, description, game and roll button */}
        <div className="mt-8 space-y-8">
          <div className="grid justify-center gap-2">
            <div className="text-5xl font-bold flex justify-center ">
              Tenzies
            </div>
            <div className="text-2xl grid w-96 text-center">
              Roll until all dice are the same. Click each dice freeze it at its
              current value between each roll
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" grid grid-rows-2 grid-cols-5 gap-10">
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
              <button className="bg-blue-200 w-20 h-16">1</button>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 w-40 h-16 rounded-md text-2xl font-bold text-white">
              Roll
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
