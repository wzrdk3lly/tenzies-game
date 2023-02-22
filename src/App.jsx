import { useState } from "react";
import reactLogo from "./assets/react.svg";
import diceData from "./diceData";

function App() {
  /*
  Todo:
  [ ] - implement a randomize feature for the dice state
  [ ] - once we can succesffully roll and randomize the dice, lets move dice to it's on component
        - we can collect state of the app in the App componennt and then we can pass it down to children 


 */

  // contains diceData array of object. Feature is disabled now
  console.log(diceData);
  const [dice, setDiece] = useState(diceData);

  //  state for the dice
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);

  // currently this just pulls from an array that we generate.
  // The next feature will need to include iterating theough dice data and setting each of the dice to be
  // a random number
  function rollEvent() {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      arr[i] = Math.floor(Math.random() * 11);
    }
    setArrayOfNumbers(arr);

    arrayOfNumbers;

    console.log(arrayOfNumbers);
  }

  // When we want to display all the dice buttons we can just map through the dice state
  // and set each button to be a dice.number

  let diceElements = arrayOfNumbers.map((number) => {
    // // setDie((prevDie) => {
    // //   return {
    // //     ...prevDie,
    // //     number: number,
    // //   };
    // });
    return (
      <button className="bg-white rounded-md border-2 border-gray-300 hover:border-purple-500 w-20 h-16 shadow-xl">
        {number}
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

          <div className="flex justify-center">
            <div className=" grid grid-rows-2 grid-cols-5 gap-10">
              {diceElements}
            </div>
          </div>
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
