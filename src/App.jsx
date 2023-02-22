import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  /*TODO List today
  [] - add styling to dyce so that that the resemble the design
  1. create state for the dice on numbers 1 through 10 
  2. crate a randomize function where all the dice are randomized 
  3. we can refactor the button code and place it in another file. 
  4. In the dice componenent we can iterate over the passed in randomized array and create a button
     componen
  5. the die state will be like this 
        const [die, setDie] = react.useState({
            number: 1,
            frozen: false,
        })

   6. when the app first loads randomly generate an array of numbers from the 1-10. Work on randomizing first and then freezing. 

 */

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
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
              <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
                2
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 w-40 h-16 border-2 hover:border-purple-500 rounded-md text-2xl font-bold text-white">
              Roll
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
