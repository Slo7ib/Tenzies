import React, { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

export default function Main() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const newGameBtn = React.useRef(null);

  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (gameWon) {
      return setDice(() => generateAllNewDice());
    } else {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  useEffect(() => {
    if (gameWon) {
      newGameBtn.current.focus();
    }
  }, [gameWon]);

  return (
    <main className="bg-gray-800 flex flex-col h-screen w-screen">
      <div className="bg-zinc-300 m-7 h-4/5 w-1/2 mx-auto rounded-xl flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mb-7">Tenzies</h1>
        <p className="text-center">
          Roll until all dice are the same. Click each die to <br /> freeze it
          at its current value between rolls.
        </p>
        <div className="container grid w-4/5 h-2/4 grid-cols-5 grid-rows-2 justify-center justify-items-center content-center items-center">
          {dice.map((dieObj) => (
            <Die
              id={dieObj.id}
              key={dieObj.id}
              value={dieObj.value}
              isHeld={dieObj.isHeld}
              hold={hold}
            />
          ))}
        </div>
        <button
          className="bg-indigo-700 w-1/6 h-20 rounded-xl font-semibold text-3xl text-white mt-6 hover:text-black hover:bg-amber-50 hover:border-2 hover:border-indigo-700 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          onClick={rollDice}
          ref={newGameBtn}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>
        {gameWon && <ReactConfetti />}
      </div>
    </main>
  );
}
