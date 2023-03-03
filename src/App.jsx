import { useEffect, useState } from "react";
import diceData from "./diceData";
import Dice from "./components/Dice";

function App() {
  // state of the diceData array which is an array of objects
  let [dice, setDice] = useState(diceData);
  let [gameResult, setGameResult] = useState(false);

  // Function that returns a random number between 1 and 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // On first load randomize the dice
  useEffect(() => {
    randomizeDice();
  }, []);
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

  useEffect(() => {
    checkForWinner();
  }, [dice]);

  /*
  @dev checks that all dice are frozen AND that each die equal the same value
  */
  function checkForWinner() {
    let count = 0;

    dice.forEach((dieObject) => dieObject.frozen === true && count++);

    let allEqual = dice.every(
      (dieObject) => dieObject.number === dice[0].number
    );

    if (allEqual && count == 10) {
      setGameResult(true);
    }
  }

  function restartGame() {
    //reset all dice to original state with new set of random numbers
    setDice((prevDice) =>
      prevDice.map((dieData) => ({
        frozen: false,
        number: getRandomNumber(),
      }))
    );

    setGameResult(false);
  }

  /*
  @dev elements that contain the game description, display while game is in play
  */
  let gameInstrucitonsElements = (
    <div className="grid justify-center gap-2 mt-6">
      {/* if gameresult is true display one thing  */}
      <div className="text-5xl font-bold flex justify-center ">Tenzies</div>
      <div className="text-2xl grid w-96 text-center">
        Freeze dice until they are all the same. Click each dice to freeze it at
        its current value between each roll
      </div>
    </div>
  );

  /*
  @dev elements for the game to be displayed when won 
  */
  let gameWonInstructionsElements = (
    <div className="grid justify-center gap-2 mt-6">
      {/* if gameresult is true display one thing  */}

      <div className="text-5xl font-bold flex justify-center ">
        GG, You Won!
      </div>
      <div className="text-2xl grid w-96 text-center">
        Press restart to play again
      </div>
    </div>
  );

  let rollButtonElements = (
    <div className="flex justify-center space-x-4">
      {/* if game result is false display roll if true display restart */}
      <button
        className="bg-blue-500 w-40 h-16 border-2 hover:border-purple-500 rounded-md text-2xl font-bold text-white"
        onClick={rollEvent}
      >
        Roll
      </button>
    </div>
  );

  let restartButtonElements = (
    <div className="flex justify-center">
      {/* if game result is false display roll if true display restart */}
      <button
        className="bg-blue-500 w-40 h-16 border-2 hover:border-purple-500 rounded-md text-2xl font-bold text-white"
        onClick={restartGame}
      >
        Restart
      </button>
    </div>
  );

  // frozen: diceToToggle.frozen ? false : true,

  return (
    <main className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="bg-white w-11/12 h-[33rem] rounded-md ">
        {/* Tenziez board header, description, game and roll button */}
        {gameResult == true
          ? gameWonInstructionsElements
          : gameInstrucitonsElements}
        <div className="mt-8 space-y-8">
          {/* Dice Componenent  */}
          <Dice
            key={dice.length.toString()}
            diceProp={dice}
            toggleFreeze={toggleFreeze}
          />
          {/* Roll & restart buttons  */}
          {gameResult == true ? restartButtonElements : rollButtonElements}
        </div>
      </div>
    </main>
  );
}

export default App;
