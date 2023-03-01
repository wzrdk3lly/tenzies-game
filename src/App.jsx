import { useEffect, useState } from "react";
import diceData from "./diceData";
import Dice from "./Dice";

function App() {
  /*
  Todo:
  [ ] - Now lets work on builing the freeze funcitonality. 
    - When a dice is frozne change the state of frozen to true. 
    - make the color of this dice elememt to be green

 */
  // state of the diceData array which is an array of objects
  let [dice, setDice] = useState(diceData);

  // let diceElements;

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
    // TODO ADD the ability to not randomize a dice when they are frozen
    setDice((prevDice) =>
      prevDice.map((diceObject) => ({
        ...diceObject,
        number: getRandomNumber(),
      }))
    );
  }

  // On each roll set the dice state to have a random number between 1 - 10
  function rollEvent() {
    randomizeDice();
  }

  // Whenever the die is clicked toggle between die.froozen = "true/false"
  function toggleFreeze(e) {
    // each dice button has a value field that represents it's index in the dice array
    let indexOfSelectedDie = parseInt(e.target.value);

    let diceToToggle = dice.filter(
      (die, index) => index == indexOfSelectedDie
    )[0];

    setDice((prevDice) => {
      // iterates over each dice object
      let newDice = prevDice.map((diceObject, index) => {
        // toggle frozen for the diceObject that has the same index as the object we selected
        if (index == indexOfSelectedDie) {
          return {
            ...diceObject,
            frozen: true,
          };
        } else {
          return {
            ...diceObject,
          };
        }
      });

      return newDice;
    });
  }
  // frozen: diceToToggle.frozen ? false : true,

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

          {/* Die Componenent  */}
          <Dice
            key={dice.length.toString()}
            diceProp={dice}
            toggleFreeze={toggleFreeze}
          />

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
