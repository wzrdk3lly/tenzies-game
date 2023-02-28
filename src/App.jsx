import { useEffect, useState } from "react";
import diceData from "./diceData";

function App() {
  /*
  Todo:
  [ ] - once we can succesffully roll and randomize the dice, lets move dice to it's on component
      - we can collect state of the app in the App componennt and then we can pass it down to children 
 */
  // state of the diceData array which is an array of objects
  let [dice, setDice] = useState(diceData);

  let diceElements;

  // On first load randomize the dice
  useEffect(() => {
    randomizeDice();
  }, []);

  // Function that returns a random number between 1 and 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  // Modifies the state of the dice
  function randomizeDice() {
    setDice((prevDice) =>
      prevDice.map((diceObject) => ({
        ...diceObject,
        number: getRandomNumber(),
      }))
    );
    console.log(dice);
  }

  // On each roll set the dice state to have a random number between 1 - 10
  function rollEvent() {
    randomizeDice();
  }

  diceElements = dice.map((die) => {
    return (
      <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
        {die.number}
      </button>
    );
  });

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
          {/* dice component */}
          <div className="flex justify-center">
            <div className=" grid grid-rows-2 grid-cols-5 gap-10">
              {diceElements}
            </div>
          </div>
          {/* dice component */}

          <div className="flex justify-center">
            <button
              className="bg-blue-500 w-40 h-16 border-2 hover:border-purple-500 rounded-md text-2xl font-bold text-white"
              onClick={rollEvent}
            >
              Roll
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
