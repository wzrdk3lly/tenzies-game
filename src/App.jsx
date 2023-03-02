import { useEffect, useState } from "react";
import diceData from "./diceData";
import Dice from "./components/Dice";

function App() {
  /*
  Todo:
  [ ] - Now lets work on builing the freeze funcitonality. 
    - When a dice is frozne change the state of frozen to true. 
    - make the color of this dice elememt to be green
 */

  // state of the diceData array which is an array of objects
  let [dice, setDice] = useState(diceData);

  // On first load randomize the dice
  useEffect(() => {
    randomizeDice();
  }, []);

  // TODO: Add some function that checks if all of the frozen fields are true and if all the numbers match
  //This will likely leverage a use effect

  // Function that returns a random number between 1 and 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // Modifies the state of the dice
  function randomizeDice() {
    // Randomizes only the die that are not frozen
    setDice((prevDice) => {
      return prevDice.map((dieObject) => {
        return {
          ...dieObject,
          number:
            dieObject.frozen == true ? dieObject.number : getRandomNumber(),
        };
      });
    });
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
    console.log(diceToToggle, "before toggle");
    setDice((prevDice) => {
      // iterates over each dice object
      let newDice = prevDice.map((diceObject, index) => {
        // toggle selected dice pbjects frozen field to `true`
        if (index == indexOfSelectedDie) {
          return {
            ...diceObject,
            frozen: diceToToggle.frozen == true ? false : true,
          };
        } else {
          // if the selected dice does not match the index return a copy of the old object
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

          {/* Dice Componenent  */}
          <Dice
            key={dice.length.toString()}
            diceProp={dice}
            toggleFreeze={toggleFreeze}
          />
          {/* Dice Componenent  */}

          {/* Roll Button  */}
          <div className="flex justify-center">
            <button
              className="bg-blue-500 w-40 h-16 border-2 hover:border-purple-500 rounded-md text-2xl font-bold text-white"
              onClick={rollEvent}
            >
              Roll
            </button>
          </div>
          {/* Roll Button  */}
        </div>
      </div>
    </main>
  );
}

export default App;
